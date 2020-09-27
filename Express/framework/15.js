//引入Express框架
const express = require('express');
//路径拼接
const path = require('path');
//创建网站服务器(app 变量)
const app = express();


//1.告诉express 框架使用什么模板引擎渲染什么后缀的模板文件
//  参数：1.模板后缀  2.使用模板引擎名称
app.engine('art', require('express-art-template'))


//2.告诉express框架模板存放地点位置是什么
//参数：1.  views  是固定的,告诉express框架模板存放的位置  2.位置信息模板引擎路径（文件夹的）
app.set('views', path.join(__dirname, 'views'));

//3.告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');


//users 为自定义名称
app.locals.users = [{
    name: '张三',
    age: 20
}, {
    name: '李四',
    age: 19
}];


app.get('/index', (req, res) => {
    //render 方法是express框架提供的
    //render  做了1.拼接模板路径   2.拼接模板后缀  
    // 3.哪一个模板和哪一个数据进行拼接  4.将拼接的结果响应给客户端，不需要使用 res.send方法

    //参数：1.模板的名字（上面配置了后缀就可以省略后缀）  2.一个对象
    res.render('index', {
        msg: '首页'
    });
});

app.get('/list', (req, res) => {
    res.render('list', {
        msg: '列表页'
    })
});






//监听端口
app.listen(3000);
console.log('服务器启动成功');