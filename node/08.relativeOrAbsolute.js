const fs = require('fs');
const path = require('path')

console.log(__dirname); //Users\Administrator\Desktop\node
console.log(path.join(__dirname, '01.js')); //Users\Administrator\Desktop\node\01.js

//'./01.js'  是相对路径，cmd PowerShell 在当前目录下打开才能执行01.js,其他目录下打开01.js就会报错
//   所以需要使用绝对路径
// fs.readFile('./01.js'), 'utf8', (err, doc) => {
fs.readFile(path.join(__dirname, '01.js'), 'utf8', (err, doc) => {
    console.log(err);
    console.log(doc);
})