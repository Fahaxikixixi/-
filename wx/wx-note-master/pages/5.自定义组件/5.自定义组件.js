// pages/5.自定义组件/5.自定义组件.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id: 1,
        name: "首页",
        isActive: true
      },
      {
        id: 2,
        name: "原创",
        isActive: false
      },
      {
        id: 3,
        name: "关于",
        isActive: false
      },
      {
        id: 4,
        name: "分类",
        isActive: false
      },
    ]
  },
  handle(e){
    // 子组件传递过来的数据通过e.detail接收
    // index代表被点击元素的下标
    const {index}=e.detail;
    let {tabs}=this.data;
    // console.log(index,tabs);
    // 循环父组件的数据,当循环的项的下标=被点击元素下标时添加active，同时把其它项的active取消
    tabs.forEach((item,i)=>{
      i===index?item.isActive=true:item.isActive=false
    })
    // 把新数据同步到data中
    this.setData({
      tabs
    })
    
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})