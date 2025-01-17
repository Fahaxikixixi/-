// pages/auth/index.js
import { request } from "../../request/index.js";
import { login } from "../../utils/asyncWx.js";

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    //获取用户信息
    async handleGetUserInfo(e) {
        try {
            console.log(e);
            //1获取用户信息
            const { encryptedData, rawData, iv, signature } = e.detail;
            //2获取小程序登录成功后的code 的值
            const { code } = await login();
            const loginParams = { encryptedData, rawData, iv, signature, code };
            console.log(code);
            //3发送请求  获取用户的token值
            //需要设置开发域名白名单 才能做post请求
            const { token } = await request({ url: 'users/wxlogin', data: loginParams, method: 'post' });
            //4把token  存入缓存中  同时返回跳转上一个页面
            wx.setStorageSync('token', token);
            wx.navigateBack({
                delta: 1
            });
        } catch (error) {
            console.log(error)
        }






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