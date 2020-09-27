//引入Express框架
const express = require('express');

//创建网站服务器(app 变量)
const app = express();

//创建一个路由，接收get请求参数
app.get('/index', (req, res) => {

    //req 响应对象  res 请求对象
    //获取get请求参数
    res.send(req.query);
});


//监听端口
app.listen(3000);
console.log('服务器启动成功');