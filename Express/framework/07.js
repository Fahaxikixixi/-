//引入Express框架
const express = require('express');

//创建网站服务器(app 变量)
const app = express();


//创建路由对象
const home = express.Router();

//为路由对象匹配请求路径
app.use('/home', home); //当请求地址是/home 时 就有home  这个路由进行处理
//创建二级路由
home.get('/index', (req, res) => {
    res.send('欢迎进入...');
})



//监听端口
app.listen(3000);
console.log('服务器启动成功');