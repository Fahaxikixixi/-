//中间件应用


//引入express框架
const express = require('express');

//创建网站服务器(app 变量)
const app = express();


//req 响应对象  res 请求对象


//中间件是从上到下执行的  网站公告 和 模拟登录需要 注释相应的来查看效果

//网站公告
// app.use((req, res, next) => {
//     res.send('当前网站正在维护......')
// })


//模拟登录
app.use('/admin', (req, res, next) => {
    //用户没有登录
    let isLogin = false;
    //如果用户登录
    if (isLogin) {
        //让请求继续向下执行
        next();
    } else {
        //如果用户没有登录 直接对客户端做出响应
        res.send('你还没有登录，不能访问/admin这个页面')
    }
})

app.get('/admin', (req, res) => {
    res.send('你已经登录，可以访问当前页面')
})


app.use((req, res, next) => {
    // res.status(404)
    res.status(404).send('当前访问的网页是不存在的......')
})


//监听端口（有端口才能提供服务）
app.listen(3000);
console.log('网站服务器启动成功');