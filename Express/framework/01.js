//引入express框架
const express = require('express');

//创建网站服务器(app 变量)
const app = express();


//req 响应对象  res 请求对象
app.get('/', (req, res) => {
    //send() 响应方法
    // 1.send方法内部会检测响应内容的类型
    // 2.send方法会自动设置http状态码
    // 3.send方法会帮我们自动设置响应的内容类型及编码
    res.send('Hello Express');
})

app.get('/list', (req, res) => {
    res.send({ name: '21Y', age: 20 })
})


//监听端口（有端口才能提供服务）
app.listen(3000);
console.log('网站服务器启动成功');