//中间件应用


//引入express框架
const express = require('express');
//文件读取模块
const fs = require('fs');

//创建网站服务器(app 变量)
const app = express();


//req 响应对象  res 请求对象


app.get('/index', (req, res, next) => {

    //Eeeor 是内置的构造函数  创建Error 实例相当于创建一个错误
    //抛出错误的 关键字 throw
    //throw new Error('程序发送未知错误'); //同步代码


    //这里读取的文件是不存在的，所以会触发错误 改成目录下存在的文件就不会错误
    fs.readFile('./文件清单.txt', 'utf8', (err, result) => {
        // 文件读取发生错误 err 就返回一个对象，成功 err 就为 null
        if (err != null) {
            //将错误交由下一个中间件
            next(err);
        } else {
            res.send(result)
        }
    });
});

//错误处理中间件只能捕获同步代码出错
//错误处理中间件 err 错误对象 内有一个属性 message 保存的是上面错误信息
//错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});


//监听端口（有端口才能提供服务）
app.listen(3000);
console.log('网站服务器启动成功');