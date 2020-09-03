// components/Tabs/Tabs.js
Component({
    /**
     * 组件的属性列表
     */
    // properties  接收父向子传递的数据
    //接收的是要从父组件中接收的数据
    properties: {

        //要接收的数据的名称
        aaa: {
            //type  要接收的数据的类型
            type: String,
            //value  默认值     默认就是等于在使用组件页面 在组件标签内设置的属性值
            value: ""
        }

    },

    /**
     * 组件的初始数据
     */
    data: {
        tabs: [{
            id: 0,
            name: "首页",
            isActive: true
        }, {
            id: 1,
            name: "原创",
            isActive: false
        }, {
            id: 2,
            name: "分类",
            isActive: false
        }, {
            id: 3,
            name: "关于",
            isActive: false
        }]
    },

    /**
     * methods组件的方法列表
     * 1 页面.js  文件中  存放事件回调函数的时候   存放在data同层级下！！！
     * 2 组件.js  文件中  存放事件回调函数的时候   存放在methods中！！！！
     * 
     */
    methods: {
        hanldeItemTap(e) {
            // console.log(e)
            // console.log(e.currentTarget.dataset);
            // 1绑定点击事件需要在methods中绑定
            // 2获取被点击的索引
            // 3获取原数组
            // 4对数组循环


            //    1给每一个循环性选中属性改为false
            //    2给当前的索引的项添加激活选中效果就可以了! !!

            //2获取索引
            //{}  ES6语法  ==>{ index } = e.currentTarget.dataset  === index=e.currentTarget.dataset.index
            const { index } = e.currentTarget.dataset;
            console.log(typeof index)
            console.log(index)
                //3 获取data中的数组


            // let { tabs } = this.data;  ==>等同于   tabs=this.data.tabs 和下面的都可以（建议不要用第一种）
            // let tabs = JSON.parse(JSON.stringify(this.data.tabs))
            let { tabs } = this.data;
            // console.log(typeof tabs)
            //4 循环数组
            //  数组.forEach  遍历数组的时候  修改了v   也会导致原数组被修改
            tabs.forEach((v, i) => {
                    i === index ? v.isActive = true : v.isActive = false
                    console.log(typeof i)
                })
                // console.log(v)
                // console.log(i)
                // console.log(n)
                // })
            console.log(tabs)
            this.setData({
                tabs
            })
        }
    }
})