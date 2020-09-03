// pages/goods_ list/index.js
import { request } from "../../request/index.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
            id: 0,
            value: "综合",
            isActive: true
        }, {
            id: 2,
            value: "销量",
            isActive: false
        }, {
            id: 3,
            value: "价格",
            isActive: false
        }],
        //商品数据
        goodsList: []
    },
    //接口要的参数
    //下面的参数与接口内的是一样的，需要用写在这里，为了后面分页，先显示多少上拉之后增加
    QueryParams: {
        query: "",
        //这个cid与 分类页点击的商品对应在 生命周期函数onload传入的一样 
        cid: "",
        pagenum: 1,
        pagesize: 10
    },
    //存放数据的总页数==>返回的数据total: 23  总共23条  一页十条
    //默认1
    totalPages: 1,









    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.QueryParams.cid = options.cid;
        this.getGoodsList()


    },

    //获取商品列表数据
    async getGoodsList(e) {
        const res = await request({ url: 'goods/search', data: this.QueryParams });
        // console.log(res);
        this.totalPages = Math.ceil(res.data.message.total / this.QueryParams.pagesize); //math.ceil()  天花板函数
        // console.log(this.totalPages);
        this.setData({

            //ES6  扩展运算符  将两个数组合并拼接数据
            goodsList: [...this.data.goodsList, ...res.data.message.goods]
        });

        //关闭下拉刷新的窗口   如果没有调用下拉刷新窗口 直接关闭不会报错
        wx.stopPullDownRefresh();
    },



    //标题点击事件  从子组件传递过来的参数
    handleTabsItemChange(e) {
        // console.log(e);
        //1 获取被点击的标题索引
        const { index } = e.detail;
        //2 修改原数组
        let { tabs } = this.data;
        tabs.forEach((v, i) => {
            i === index ? v.isActive = true : v.isActive = false;
        });
        //  赋值到data中
        this.setData({
            tabs
        })
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        if (this.QueryParams.pagenum >= this.totalPages) {
            wx.showToast({
                title: '没有更多数据了',
            })
        } else {
            this.QueryParams.pagenum++;
            this.getGoodsList();
        }
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        // console.log('%c' + "刷新", "color:red; font-size:100px; background-image:linear-gradient(to right,#0094ff,pink )")
        //1重置数组
        this.setData({
                goodsList: []
            })
            //2重置页码
        this.QueryParams.pagenum = 1;
        //3 重新发送请求
        this.getGoodsList();
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
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})