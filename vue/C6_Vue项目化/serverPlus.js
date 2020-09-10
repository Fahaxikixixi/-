const http = require('http');
const fs = require('fs');
const hostName = 'localhost', port = '8888';

'use strict';

// 创建http服务
const server = http.createServer(function (req, res) {
    let content = fs.readFileSync('firdtReact.html');
    res.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
    res.write(content);
    res.end();
});

// 启动服务监听
server.listen(port, hostName, function () {
    console.log('\nserver has running here!')
    console.log('----------------------')
    console.log(`http://${hostName}:${port}`);
    console.log('----------------------')
})
// serverPlus.js
// serverPlus.js
