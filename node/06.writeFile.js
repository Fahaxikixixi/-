const fs = require('fs');


//写入的文件不存在时会自动创建
fs.writeFile('./demo.text', '即将要写入内容', err => {
    if (err != null) {
        console.log(err);
        return;
    }
    console.log('文件内容写入成功');
})