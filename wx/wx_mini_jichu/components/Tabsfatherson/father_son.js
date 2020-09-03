Component({
    /**
     * 组件的属性列表
     */
    // properties  接收父向子传递的数据
    //接收的是要从父组件中接收的数据
    properties: {

        //要接收的数据的名称
        tabs: {

            //type  value  两个的值最好是根据传递的数据的不同来填写对应的值
            //type  要接收的数据的类型
            type: Array,
            //value  默认值     
            value: []
        }

    },

    /**
     * 组件的初始数据
     */
    data: {

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
            //  5 点击事件触发的时候
            //      触发父组件中的自定义事件  同时传递数据给  父组件
            //      触发代码   this.triggerEvent("父组件自定义事件的名称，要传递的参数")


            //2获取索引
            //{}  ES6语法  ==>{ index } = e.currentTarget.dataset  === index=e.currentTarget.dataset.index
            const { index } = e.currentTarget.dataset;

            //5 触发父组件中的自定义事件  同时子组件传递数据给父组件
            this.triggerEvent("itemChange", { index })
                // console.log(this)


        }
    }
})