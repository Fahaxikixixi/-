import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'

//导入单文件组件
import App from './components/App.vue'

$(function() {
    //odd  even
    $('li:odd').css('background-color', ' darkorange')
    $('li:even').css('background-color', ' cornflowerblue')
})

class Person {
    static info = 'aaa'
}

console.log(Person.info);

//-------------------------------------
//导入vue
import Vue from 'vue'
//导入单文件组件
import app from './components/app.vue'

const vm = new Vue({
    // 3.指定vIm实例要控制的页面区域
    el: '#app',
    // 4.通过render函数，把指定的组件渲染到el区域中
    render: h => h(App)
})