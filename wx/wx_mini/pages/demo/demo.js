Page({
    onShareAppMessage() {
        return {
            title: 'swiper',
            path: 'page/component/pages/swiper/swiper'
        }
    },

    data: {
        //顶部轮播图
        background: ['/img/5.jpg', '/img/6.jpg', '/img/5.jpg'],
        indicatorDots: false,
        //indicatorcolor: rgba(),//  轮播图指示点的颜色
        //indicatoractivecolor:rgba(),//指示点选中时的颜色
        vertical: false, //控制轮播的方向    falsh  ：水平   true：垂直
        autoplay: true,
        interval: 2000,
        duration: 500,
        num: 0, //第一个轮播图对应的当前值

        // 新品上市下的轮播图
        background1: ['/img/6.jpg', '/img/5.jpg', '/img/6.jpg'],
        indicatorDots1: false,
        //indicatorcolor: rgba(),//  轮播图指示点的颜色
        //indicatoractivecolor:rgba(),//指示点选中时的颜色
        vertical1: false, //控制轮播的方向    falsh  ：水平   true：垂直
        autoplay1: true,
        interval1: 2000,
        duration1: 500,
        num1: 0, //第一个轮播图对应的当前值
    },
    swiperFn(e) {
        //获得当前是第几张图片----索引值
        // console.log(e.detail.current);
        this.setData({
            num: e.detail.current
        })
    },
    swiperFn1(e) {
        //获得当前是第几张图片----索引值
        // console.log(e.detail.current);  //在 wx：for 循环时  在绑定的事件通过函数对象e  打印可以看见
        this.setData({
            num1: e.detail.current
        })
    },
    //当前页绑定的返回顶部函数
    toTop(e) {
        // console.log(e.detail);
        wx.pageScrollTo({
            scrollTop: e.detail
        })
    }

})