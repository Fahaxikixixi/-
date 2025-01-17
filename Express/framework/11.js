//引入Express框架
const express = require('express');

//引入body-parser 模块
const bodyParser = require('body-parser');


//创建网站服务器(app 变量)
const app = express();

app.use(fn({ a: 2 }));

function fn(obj) {
    return function(req, res, next) {
        if (obj.a == 2) {
            console.log(req.url);
        } else {

            console.log(req.method);
        }
        next()
    }
}

app.get('/', (req, res) => {

    res.send('ok');
});


//监听端口
app.listen(3000);
console.log('服务器启动成功');