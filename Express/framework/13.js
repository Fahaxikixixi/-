//引入Express框架
const express = require('express');
//路径拼接
const path = require('path');
//创建网站服务器(app 变量)
const app = express();

//获取当前文件路径__dirname
// path.join(__dirname, 'public');

//实现静态资源访问功能
app.use(express.static(path.join(__dirname, 'public')));
//访问路径   http://localhost:3000/default.html

// app.use('/index', express.static(path.join(__dirname, 'public')));
//访问路径  http://localhost:3000/index/default.html





//监听端口
app.listen(3000);
console.log('服务器启动成功');