// pages/demo_radio/radio.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        gender: "",
        checkboxvalue: [],
        list: [{
            id: "0",
            name: "ZGGO1",
            value: "wx"
        }, {
            id: "1",
            name: "welist",
            value: "wz"
        }, {
            id: "2",
            name: "xxlu",
            value: "wdy"
        }, {
            id: "3",
            name: "Forever",
            value: "wz"
        }]
    },
    change(e) {
        console.log(e);
        //1.先获取单选框的值
        let gender = e.detail.value;
        // 2. 把值 赋值给 data中的数据
        this.setData({
            //直接写 相当于gender: gender   ES6 写法
            gender
        })
    },
    checkbox(e) {
        console.log(e.detail.value);
        this.setData({
            checkboxvalue: e.detail.value
        })
    },














    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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