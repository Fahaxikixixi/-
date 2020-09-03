// pages/cart/index.js
/*1.页面加载的时候
    1.1从缓存中获取购物车数据  渲染到页面（应该是在购物车页面选中的）
      这些数据checked 应该是true
  2 微信支付
    1.那些人 那些账号可以实现微信支付
      1.1 企业账号
      1.2 企业账号的小程序后台中  必须 给开发者  添加上白名单
          1.2.1 一个appID  可以同时绑定多个开发者
          1.2.2 这些开发者就可以共用这个appID 和 它的开发权限
  3.支付按钮
    3.1先判断缓存中有没有token
    3.2没有   跳转到授权页面  进行获取token
    3.3有token  就正常执行下面代码
    3.4有token ==>创建订单  获取订单编号
    3.5 已经完成微信支付
    3.6手动删除缓存中 已经被选中的商品
    3.7删除后的购物车 数据 填充回缓存中
    3.8再跳转页面
*/


import { getSetting, chooseAddress, openSetting, showModal, showToast, requestPayment } from "../../utils/asyncWx.js";
import { request } from "../../request/index.js";

Page({

    data: {
        address: {},
        cart: [],

        totalPrice: 0,
        totalNum: 0
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        //1.获取缓存中的收货地址信息
        const address = wx.getStorageSync('address');

        //三 1.获取缓存中的购物车数据
        let cart = wx.getStorageSync('cart') || []; //当cart 不存在是  就等于一个空数组
        //过滤后的购物车数组
        cart = cart.filter(v => v.checked);
        this.setData({ address })
        let totalPrice = 0
        let totalNum = 0
        cart.forEach(v => {
            totalPrice += v.num * v.goods_price;
            totalNum += v.num;

        })
        this.setData({
            cart,
            totalPrice,
            totalNum,
            address
        })
    },
    //点击支付
    async handleOrderPay(e) {
        try {
            //1 判断缓存中有没有token
            const token = wx.getStorageSync('token');
            //2判断
            if (!token) {
                wx.navigateTo({
                    url: '/pages/auth/index',
                })
                return;
            }
            //3 创建订单
            // 3.4.1准备  请求头参数
            const header = { Authorization: token };
            // 3.4.2准备  请求体参数
            //订单价格
            const order_price = this.data.totalPrice;
            //收货地址
            const consigenee_addr = this.data.address.all;

            const cart = this.data.cart;
            let goods = [];
            cart.forEach(v => goods.push({
                goods_id: v.goods_id,
                goods_number: v.num,
                goods_price: v.goods_price
            }));
            const orderParams = { order_price, consigenee_addr, goods };
            //4 准备发送请求  创建订单  获取订单编号
            const { oeder_number } = await request({ url: 'my/orders/create', method: "POST", data: orderParams, header: header });
            console.log(oeder_number); //里面的订单编号为 order_number  因为没有进入白名单  所以不能就行post 请求   上一步请求也没获取到token
            //5 发起预支付接口
            const { pay } = await request({ url: 'my/orders/req_unifiedorder', method: "POST", header: header, data: { order_number } })

            //requestPayment  是微信支付的组件  而 上面接口获取的数据中 pay 内的数据和支付组件内的参数是一样的
            //    nonceStr,package,paySign,timeStamp
            // wx.requestPayment({
            //   nonceStr: 'nonceStr',
            //   package: 'package',
            //   paySign: 'paySign',
            //   timeStamp: 'timeStamp',
            // })


            //6 发起微信支付
            await requestPayment(pay);
            //7 查询后台  订单状态
            const res = await request({ url: 'my/orders/chkOrder', method: "POST", header: header, data: { order_number } })

            await showToast({ title: "支付成功" });
            //8.1手动删除缓存中 已经支付了的商品
            let newCart = wx.getStorageSync("cart");
            //留下未被选中的
            newCart = newCart.filter(v => !v.checked);
            wx.setStorageSync('cart', newCart);
            //8.2 支付成功之后跳转 订单页面
            wx.navigateTo({
                url: '/papges/order/index',
            })


        } catch (err) {
            await showToast({ title: "支付失败" })

            console.log(err)
        }
    }
})