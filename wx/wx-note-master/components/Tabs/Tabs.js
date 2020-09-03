// components/Tabs.js
Component({
  properties: {
    // 父组件传递过来的数据，它不会自动保存到data中
    tabdata:{
      type: Array,
      value: []
    }
  },
  data: {
 
  },
  methods: {
    change1(e){
      // console.log(this.properties);
      // console.log(e.target.dataset);
      const {index}=e.target.dataset
      // 通过triggerEvent('父组件的自定义事件',要传给父组件的数据)  给父组件传递数据
      this.triggerEvent('handle',{index})
    }
  }
})
