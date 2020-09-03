Page({
  data:{
    html:'<a data-v-27c76476="" target="_blank" href="/video/BV1zE411H7Px" class="vide-item"><img data-v-27c76476="" src="//i0.hdslb.com/bfs/archive/f7b1e578c971303eaf88a0b989bccc8f886ecc20.jpg@412w_232h_1c_100q.jpg" alt="" class="pic"></a>',
    sex: 'man'
  },
  change1(e){
    // console.log(e);
    this.setData({
      sex: e.detail.value
    })
  }
})