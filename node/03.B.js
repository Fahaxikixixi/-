const a = require('./02.A.js'); //括号内的是对应要引入方法的文件地址  .js可以省略
console.log(typeof a); //是exports 对象

console.log(a.add(10, 20)); //30