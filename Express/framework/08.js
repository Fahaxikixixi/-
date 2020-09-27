//引入Express框架
const express = require('express');

//创建网站服务器(app 变量)
const app = express();

//导入home  和 admin 路由模块
const home = require('./route/home.js');
const admin = require('./route/admin.js');


//当请求路径为 /home时  就由home 路由进行处理
app.use('/home', home);
app.use('/admin', admin);


//监听端口
app.listen(3000);
console.log('服务器启动成功');