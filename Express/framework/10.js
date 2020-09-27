//引入Express框架
const express = require('express');

//引入body-parser 模块
const bodyParser = require('body-parser');
const { RSA_NO_PADDING } = require('constants');

//创建网站服务器(app 变量)
const app = express();

//拦截所有的请求
//对请求参数进行处理 ==>bodyParser.urlencoded()  body-parser 的内置方法
//方法内有一个必填参数  extended   
//exteded ：false 使用node的系统模块 querystring处理请求参数的格式  
//exteded ：true  使用第三方模块qs处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add', (req, res) => {
    //接收post请求参数  req.body
    res.send(req.body);
});


//监听端口
app.listen(3000);
console.log('服务器启动成功');