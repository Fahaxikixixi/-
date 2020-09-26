//引入express框架
const express = require('express');
//文件读取模块
const fs = require('fs');
//util 下的promisfy 方法 类似于promise 方法 
const promisify = require('util').promisify;
//包装读取文件的方法
const readFile = promisify(fs.readFile);

//创建网站服务器(app 变量)
const app = express();

//req 响应对象  res 请求对象


app.get('/index', async(req, res, next) => {
    try {
        await readFile('./aaa.js')
    } catch (ex) {
        next(ex);
    }

});

//错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});


//监听端口（有端口才能提供服务）
app.listen(3000);
console.log('网站服务器启动成功');