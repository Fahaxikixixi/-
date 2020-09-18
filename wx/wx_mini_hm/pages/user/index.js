// pages/user/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo: {}
    },
    onShow() {
        const userinfo = wx.getStorageInfoSync("userinfo");
        this.setData({ userinfo })
    }

})