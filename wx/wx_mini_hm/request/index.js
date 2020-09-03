//同时发送异步代码的参数==> 设置默认为 0
let ajaxTimes = 0;
export const request = (params) => {
    //调用一次就+1
    ajaxTimes++;

    //显示加载中
    wx.showLoading({
        title: '加载中',
        // mask  蒙版  ===> 看到加载中的窗口后用户就无法进行其他的操作
        mask: true
    });


    //定义公共的url   原始url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1/"
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: (result) => {
                resolve(result);
            },
            fail: (erro) => {
                reject(erro);
            },
            //无论成功或者失败都会执行的函数 自带的
            complete: () => {
                ajaxTimes--;
                if (ajaxTimes === 0) {
                    //关闭正在等待的图标
                    wx.hideLoading()
                }

            }
        });

    })

}