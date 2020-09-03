// pages/cart/index.js
/*一.获取收货地址
    1 获取用户的收货地址
      1.1 绑定点击事件
      1.2调用小程序内置api  获取用户的收货地址 wx.chooseAddress(地址一般都是用户在个人信息里面提前写好的，才能获取到用户的地址)
    2 问题：当点击获取地址时（第一次），弹出授权请求弹窗点击取消时， 第二次点击就没有任何效果切授权的弹框也没有了
      解决：    获取 用户 对小程序  所授权  获取地址的  权限状态  scope     
          1.点击确定授权时  authSetting ==> scope.address=true                            直接调用获取收货地址
          2.从未调用过地址  authSetting ==> scope.address=undefined（不存在就是undefined） 直接调用获取收货地址
          3.点击取消授权时  authSetting ==> scope.address=false   
              3.1 诱导用户 自己打开 授权设置页面(wx.openSetting)  当用户重新给与  获取地址权限的时候  
              3.2 获取收货地址  
    3 把获取到的收货地址  存入到  本地存储中
  二.页面加载完毕
    0. onLoad  onShow(因为购物车页面经常打开)
    1.获取本地存储的地址数据
    2.把数据 设置给data中的一个变量

  三.页面 onshow（页面显示的监听函数--生命周期函数）==>购物车页面显示时
    0.回到了商品详情页面  第一次添加商品的时候 手动添加了属性
        1.num=1 （用于控制显示 商品添加的数量）
        2.checked=true （用于在购物车页面的复选框的选择状态）
    1.获取缓存中的购物车数组
    2.把购物车数据填充到data中
  四.全选的实现  数据的展示
    1.onshow  获取缓存中的购物车数组
    2.根据购物车中的商品数据  所有的商品都被选择 ===> checked=true  全选就被选中
  五.总价格和总数量的实现
    1.都需要商品选中之后  才进行计算
    2.获取购物车数组
    3.遍历
    4.判断商品是否被选中
    5.总价格 +=商品单价*商品数量
    6.把计算后的价格和数量  设置会data中
  六.商品的选中
    1.绑定change事件
    2.获取到被修改的商品对象
    3.商品对象的选中状态 取反
    4.重新填充给data中和缓存中
    5.重新计算全选，总价格，总数量...
  七.全选和反选
    1.复选框绑定事件
    2.获取data中的allChecked
    3.直接取反 allChecked=！allChecked
    4.遍历购物车数组  让里面的商品选中状态跟随  allChecked改变而改变
    5.把购物车数组 和allChecked 存回data中  把购物车重新设置回  缓存中
  八.商品数量的编辑
    1. +  -  按钮绑定同一个点击事件  区分的关键==> 自定义属性
        1.1  + ==>  自定义属性  +1
        1.2  - ==>  自定义属性  -1
    2. 传递被点击的商品id  goods_id
    3.获取data中的购物车数组  来获取需要被修改的  商品数量对象
    4. 当购物车数量  =1 时  用户 点击了  -
        4.1 弹窗提示（ wx.showModal） 询问用户是否要删除
        4.2确定  执行删除
        4.3取消  什么都不做

    5.直接修改商品对象 的数量 num
    6.把cart  数组重新设置会data 和缓存中  ===> this.setCart
  九.点击结算
    1.判断有没有收货地址信息
    2.判断用户有没有选商品
    3.经过以上验证  跳转到   支付页面
*/


import { getSetting, chooseAddress, openSetting, showModal, showToast } from "../../utils/asyncWx.js";
Page({

    data: {
        address: {},
        cart: [],
        allChecked: false,
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
        const cart = wx.getStorageSync('cart') || []; //当cart 不存在是  就等于一个空数组

        this.setData({ address })
        this.setCart(cart)
            // //四 1.计算全选
            // //every  数组方法=>会遍历  会接受一个回调函数  那么 每一个回调函数都会返回true 那么  every方法的返回值为true
            // //只要有一个回调函数返回了 false  那么不在循环执行==>直接返回false
            // //空数组 调用了  every 返回值就是true
            // // const allChecked = cart.length ? cart.every(v => v.checked) : false; //如果cart 的长度为0 时  就直接返回false
            // let allChecked = true;
            // //五 1总价格 总数量
            // let totalPrice = 0
            // let totalNum = 0
            // cart.forEach(v => {
            //     if (v.checked) {
            //         totalPrice += v.num * v.goods_price;
            //         totalNum += v.num;
            //     } else {
            //         allChecked = false;
            //     }
            // })

        // //判断数组是否为空  
        // allChecked = cart.length != 0 ? allChecked : false;
        // this.setData({
        //     address,
        //     cart,
        //     allChecked,
        //     totalPrice,
        //     totalNum
        // })
    },


    //点击获取收货地址的点击事件
    async handleChooseAddress() {
        try {
            //优化代码后的写法

            // 1 获取  权限状态
            const res1 = await getSetting();
            const scopeAddress = res1.authSetting["scope.address"];
            //2.判断权限状态
            if (scopeAddress === false) {
                //3用户拒绝过授权==>先诱导用户打开授权页面
                await openSetting();
            }
            //4获取收货地址
            let address = await chooseAddress();
            address.all = address.provinceName + address.cityName + address.countyName + address.detailInfo;
            //5  存入到缓存中
            wx.setStorageSync("address", address)
        } catch (error) {

        }





        //原生方法下的写法（显得结构不清晰）


        // 1 获取  权限状态
        // wx.getSetting({
        //     success: (res) => {
        //         //2.获取权限状态    发现一些属性名很怪异时， 都要用[]的形式来获取属性值
        //         const scopeAddress = res.authSetting["scope.address"];
        //         if (scopeAddress === true || scopeAddress === undefined) {
        //             wx.chooseAddress({
        //                 //注意不要和外面回调函数的 参数重名
        //                 success: (res1) => {
        //                     console.log(res1);
        //                 },
        //             })
        //         } else {
        //             //3用户拒绝过授权==>先诱导用户打开授权页面
        //             wx.openSetting({
        //                 success: (res2) => {
        //                     console.log(res2);
        //                     //4可以调用 收货地址代码
        //                     wx.chooseAddress({
        //                         success: (res3) => {
        //                             console.log(res3);
        //                         },
        //                     })
        //                 },
        //             })
        //         }
        //     },
        // })


        // 调用小程序内置api 获取用户的收货地址
        // wx.chooseAddress({
        //     success: (res) => {
        //         console.log(res);
        //     }

        // })

        // // 获取用户授权的设置
        // wx.getSetting({
        //     success: (res) => {
        //         console.log(res)
        //     }
        // })

    },
    //商品的选中
    handeItemChange(e) {
        // console.log(e);
        //1获取被修改的商品的id
        const goods_id = e.currentTarget.dataset.in;

        //2获取购物车数组
        let { cart } = this.data;
        // console.log(cart);
        //3找到被修改的商品对象
        let index = cart.findIndex(v => v.goods_id === goods_id);
        // console.log(index);
        //4选中状态取反
        cart[index].checked = !cart[index].checked;
        this.setCart(cart)



        //以下代码被封装在    setCart()
        // //5 6 把购物车数据设置会data 和缓存中
        // this.setData({
        //     cart
        // })
        // wx.setStorageSync('cart', cart)
        // let allChecked = true;
        // //五 1总价格 总数量
        // let totalPrice = 0
        // let totalNum = 0
        // cart.forEach(v => {
        //     if (v.checked) {
        //         totalPrice += v.num * v.goods_price;
        //         totalNum += v.num;
        //     } else {
        //         allChecked = false;
        //     }
        // })

        // //判断数组是否为空  
        // allChecked = cart.length != 0 ? allChecked : false;
        // this.setData({
        //     cart,
        //     totalPrice,
        //     totalNum,
        //     allChecked
        // })
    },
    //将上面的代码封装到setCart  中
    //设置购物车状态的同时  重新计算  底部工具栏的数据  ===> 全选   总价格   购买的数量
    setCart(cart) {
        //5 6 把购物车数据设置会data 和缓存中


        let allChecked = true;
        //五 1总价格 总数量
        let totalPrice = 0
        let totalNum = 0
        cart.forEach(v => {
            if (v.checked) {
                totalPrice += v.num * v.goods_price;
                totalNum += v.num;
            } else {
                allChecked = false;
            }
        })

        //判断数组是否为空  
        allChecked = cart.length != 0 ? allChecked : false;
        this.setData({
            cart,
            totalPrice,
            totalNum,
            allChecked
        })
        wx.setStorageSync('cart', cart)
    },
    //商品的全选与反选
    handleItemAllCheck(e) {
        //1获取data中的数据
        let { cart, allChecked } = this.data;
        //2修改值
        allChecked = !allChecked;
        //3循环修改cart数组  中商品的选中状态
        cart.forEach(v => v.checked = allChecked);
        //4修改后的值 填充回data  和缓存中
        this.setCart(cart);
    },
    // + - 数量的编辑
    async handleItemNumEdit(e) {


        //1获取传递的参数
        // console.log(e);
        const { operation, id } = e.currentTarget.dataset;
        // console.log(operation, id);
        //2获取购物车数组
        let { cart } = this.data;

        //3找到需要修改的商品的索引
        const index = cart.findIndex(v => v.goods_id === id);
        //4 判断是否要执行删除
        if (cart[index].num === 1 && operation === -1) {
            //弹窗提示
            // wx.showModal({
            //     title: '提示',
            //     content: '是否删除商品',
            //     success: (res) => {
            //         if (res.confirm) {
            //             cart.splice(index, 1);
            //             this.setCart(cart)
            //         } else if (res.cancel) {
            //             console.log('用户点击取消')
            //         }
            //     }
            // })

            const res = await showModal({ content: '是否删除商品' });
            if (res.confirm) {
                cart.splice(index, 1);
                this.setCart(cart)
            }
        } else {
            //5修改数量
            cart[index].num += operation
                //6设置会data 和缓存中
            this.setCart(cart);
        }

    },
    //点击结算
    async handlePay(e) {
        //1获取收货地址
        const { address, totalNum } = this.data;
        if (!address.userName) {
            await showToast({ title: "您还没有选择收货地址" });
            return;
        }

        //2判断用户是否选购了商品
        if (totalNum === 0) {
            await showToast({ title: "您还没有选购商品" });
            return;
        }
        //3跳转支付页面
        wx.navigateTo({
            url: '/pages/pay/index',
        })

    }



})