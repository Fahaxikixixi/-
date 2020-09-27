//创建路由对象
const express = require('express');

//调用express.Router 方法 创建路由对象  ==>返回值是一个路由对象
const admin = express.Router();

//admin下挂载路由
admin.get('/index', (req, res) => {
    res.send('欢迎进入admin页面....');
});

//导出home路由
module.exports = admin;