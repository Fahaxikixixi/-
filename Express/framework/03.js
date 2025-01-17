//中间件


//引入express框架
const express = require('express');

//创建网站服务器(app 变量)
const app = express();


//req 响应对象  res 请求对象


//接收所有请求的中间件
app.use((req, res, next) => {
    console.log('请求走了app.use中间件');
    next();
});

//当客户端访问/admin 请求的时候走当前中间件
app.use('/request', (req, res, next) => {
    console.log('请求走了app.use / request中间件');
    next();
});

app.get('/list', (req, res) => {
    res.send('/list')
});


app.get('/request', (req, res, next) => {
    req.name = 'SOGOOO';
    next();
});

app.get('/request', (req, res) => {
    res.send(req.name);
});



//监听端口（有端口才能提供服务）
app.listen(3000);
console.log('网站服务器启动成功');