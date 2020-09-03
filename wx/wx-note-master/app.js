/* 

//应用的生命周期
App({
  // 1.应用第一次启动会触发的事件，主要用来获取用户信息
  onLaunch(){},
  // 2.当应用重新展示给用户看见的时候触发，主要用来重置数据
  onShow(){},
  // 3.当应用被隐藏的时候触发，主要用来暂停或清除定时器
  onHide(){},
  // 4.当应用发生错误的时候触发,主要用来反馈报错信息
  onError(err){},
  // 5.当页面找不到的时候触发（当应用第一次启动找不到第一个入口页面）,主要用来当页面失效时重新跳转到新页面
  onPageNotFound(){}
})
 */

/* --------------------------------- */
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})