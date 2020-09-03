Page({
  data:{
    num: 0
  },
  handle(e){
    // 如果要改变data中的数据，必须通过this.setData()事件，这是和vue不同的地方
    // console.log(e);
    this.setData({
      // 通过事件源拿到value值赋值给num
      num: e.detail.value
    })
  },
  handle2(e){
    // console.log(e);
    // 自定义属性传过来的参数保存在e.currentTarget.dataset里
    var arg=e.currentTarget.dataset.arg
    this.setData({
      //在vue中this指向的是data，而小程序指向page传进来的对象，所以要拿到data中的数据时 需要this.data.num
      num: this.data.num+arg
    })
  }
})