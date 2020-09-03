// components/btn/btn.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    /*  返回顶部所绑定事件的函数*/
    toTopFn() {
        this.triggerEvent('totop', 0);
    },
    /*拨打电话绑定的函数*/
    callFn() {
        /* wx.makePhoneCall  为微信自带的电话拨打组件*/
        wx.makePhoneCall({
            phoneNumber: '18270063763',
        })
    },
    /*地图的函数  需要跳转页面 */
    jumpToMap() {
        /**wx.navigateTo({url: 'url',})  是微信自带的跳转页面的    */
        wx.navigateTo({
            url: '/pages/map/map',
        })
    }


})