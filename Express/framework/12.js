//引入Express框架
const express = require('express');
//引入body-parser 模块
const bodyParser = require('body-parser');
//创建网站服务器(app 变量)
const app = express();

//:id 代表占位符  表示当前路由要接收一个id参数
app.get('/index/:id/:name', (req, res) => {

    res.send(req.params);
});


//监听端口
app.listen(3000);
console.log('服务器启动成功');