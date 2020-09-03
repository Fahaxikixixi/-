// pages/category/index.js
import { request } from "../../request/index.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //左侧的菜单数据
        leftMenuList: [],
        //右侧的商品数据
        rightContent: [],
        //左侧被点击的菜单小类
        currentIndex: 0,
        //每次点击重置scroll-top 到顶部的值（因为不能写死）
        scrollTop: 0
    },
    //接口的返回数据
    Cates: [],




    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        /*
          0 web中的本地存储和 小程序中的本地存储的区别
              1 写代码方式
                  web:   存值：localStorage.setItem("key","vaule")    获取值：localStorage.getItem("key")
                  小程序：  存值：  wx.setStorageSync("key","value")
                                  例：wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })
                            获取：wx.getStorageSync('key')
              2 存的时候  有没有做类型转换
                  web：   不管存入的是什么类型的数据，最终都会先调用一下 toString（），把数据变成字符串  再存入进去
                  小程序： 不存在 类型转换的操作  存什么类型的数据进去 ，获取的时候就是什么类型
          1先判断一下本地存储中有没有旧的数据
          {time:Date.now(),data:[...]}
          2没有旧数据直按发送新请求
          3有旧的数据同时旧的数据也没有过期就使用本地存储中的旧数据即可
        */

        //1.获取本地存储中的数据 （小程序中也是存在本地存储 技术）
        const Cates = wx.getStorageSync('cates');
        //2判断
        if (!Cates) {
            //不存在  发送请求获取数据
            this.getCates();
        } else {
            //有旧的数据==>判断是否过期==>过期：发请求获取新的   没过期：用旧的
            //自定义过期时间10s   验证完成之后改成 5分钟
            if (Date.now() - Cates.time > 1000 * 10) {
                //超过十秒==>重新发送请求
                this.getCates();

            } else {
                //可以使用旧的数据
                this.Cates = Cates.data;
                // console.log(this.Cates);
                let leftMenuList = this.Cates.map(v => v.cat_name);
                //构造右侧菜单数据
                let rightContent = this.Cates[0].children;
                this.setData({
                    leftMenuList,
                    rightContent
                })

            }
        }
    },

    //获取分类列表
    async getCates() {
        // request({ url: "categories" })
        //     .then(result => {
        //         this.Cates = result.data.message;

        //         //把接口的数据存入到本地存储中
        //         wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })


        //         //构造左侧大菜单数据
        //         let leftMenuList = this.Cates.map(v => v.cat_name);
        //         //构造右侧菜单数据
        //         let rightContent = this.Cates[0].children;
        //         this.setData({
        //                 leftMenuList,
        //                 rightContent
        //             });
        //构造右侧大菜单数据
        // this.Cates1=result.data.message.children;
        // let rightContent=this.Cate s1.map(v=>v.cat_name)
        // this.setData({
        //   rightContent
        // })
        const res = await request({ url: "categories" })
        this.Cates = res.data.message;
        wx.setStorageSync('cates', { time: Date.now(), data: this.Cates })


        //构造左侧大菜单数据
        let leftMenuList = this.Cates.map(v => v.cat_name);
        //构造右侧菜单数据
        let rightContent = this.Cates[0].children;
        this.setData({
            leftMenuList,
            rightContent
        })

    },
    //左侧菜单的点击事件
    handleItemTap(e) {
        // console.log(e)
        const { index } = e.currentTarget.dataset;
        //构造右侧菜单数据
        let rightContent = this.Cates[index].children;
        this.setData({
            currentIndex: index,
            rightContent,

            //每次点击重置scroll-top 到顶部的值（因为不能写死）
            scrollTop: 0
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