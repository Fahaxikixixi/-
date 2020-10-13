const path = require('path'); //导入node.js 中路径拼接模块

//导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({ //创建插件的实例对象
    template: './src/index.html', //指定要用复制的文件路径
    filename: 'index.html' //指定生成的文件的名称，该文件存在于内存中，在目录中不显示
});


const VueLoaderPlugin = require('vue-loader/lib/plugin')




//向外暴露
//CommonJs 模块的模块化开发
module.exports = {
    //编译模式
    mode: 'development', //development  production

    //自定义配置 打包出入口路径，文件打包名称
    entry: path.join(__dirname, './src/index.js'), //打包入口文件路径
    output: {
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename: 'bundle.js' //输出文件的名称
    },
    //plugins 数组是 webpack 打包期间会用到的一些插件列表
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=55000' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    }

}