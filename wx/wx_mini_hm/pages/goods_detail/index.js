// pages/goos_ detail/index.js

/*  1.发送请求获取数据
    2.点击轮播图  预览大图
        1.给轮播图加点击事件
        2.调用小程序的api   previewImage
    3. 点击 加入购物车
        1. 先绑定点击事件
        2.获取缓存中的购物车数据    数组格式
        3.先判断    当前的商品是否已经存在于  购物车里面
        4.已经存在（重复添加）  修改商品数据==>执行购物车数量++   重新把购物车数组  填充回缓存中
        5.不存在（第一次添加）  直接给购物车数组添加一个  新元素    带上    购买数量属性 num  重新把购物车数组    填充回缓存中
    4.    
*/


import { request } from "../../request/index.js"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: {}
    },
    GoodsInfo: [],

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const { goods_id } = options
        this.getGoodsDetail(goods_id)
    },
    async getGoodsDetail(goods_id) {
        const res = await request({ url: 'goods/detail', data: { goods_id } });
        this.GoodsInfo = res.data.message;
        this.setData({
            goodsObj: {
                goods_name: res.data.message.goods_name,
                goods_price: res.data.message.goods_price,
                // iphone部分手机不识别webp图片格式
                //最好找到后台让他进行修改
                //临时自己改确保后台存在    1.webp => 1.jpg

                goods_introduce: res.data.message.goods_introduce.replace(/\.webp/g, '.jpg'),
                pics: res.data.message.pics

            }
        })
    },
    //点击轮播图放大和预览
    handlePrevewImage(e) {
        //1. 先构造要预览的图片数组
        const urls = this.GoodsInfo.pics.map(v => v.pics_mid);
        //2. 接收传递过来的图片url  ===>  通过自定义属性 data-url="{{item.pice_mid}}"
        const current = e.currentTarget.dataset.url
            // console.log(e);
        wx.previewImage({
            //点击的当前放大预览图片url地址
            current,
            //要放大预览的 图片url地址的集合数组或对象   该属性为必填属性
            urls


        })
    },
    //点击 加入购物车
    handleCartAdd() {

        // 3. 点击 加入购物车
        // 3.1. 先绑定点击事件


        // 3.2.获取缓存中的购物车数据    数组格式
        let cart = wx.getStorageSync('cart') || []; //第一次获取的是空字符串   转换成数组，确保cart一定是一个数组格式
        // console.log(cart);
        // 3.3.先判断    当前的商品是否已经存在于  购物车里面
        let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id); //存在返回真正的索引  不存在返回-1
        console.log(index);
        if (index === -1) {
            // 3.5.不存在（第一次添加）  直接给购物车数组添加一个  新元素    带上    购买数量属性 num  重新把购物车数组    填充回缓存中
            this.GoodsInfo.num = 1;
            this.GoodsInfo.checked = true;
            cart.push(this.GoodsInfo)
        } else {
            // 3.4.已经存在（重复添加）  修改商品数据==>执行购物车数量++(num++)   重新把购物车数组  填充回缓存中
            cart[index].num++;
        }
        // console.log(this.GoodsInfo.num)
        // 3.5 吧购物车重新添加会缓存中
        wx.setStorageSync('cart', cart);
        //3.6弹窗提示
        wx.showToast({
            title: '添加成功',
            icon: 'success',
            //mask  等弹窗消失之后才可以点击其他地方
            mask: true
        })



    },












    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})