<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bsroll from 'better-scroll'

export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUp:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll = new Bsroll(this.$refs.wrapper,{
      observeDOM:true,
      click:true,
      probeType: this.probeType,
      pullUpLoad:this.pullUp,
      refresh:true
  })
    //监听位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    //监听上拉
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollToTop(x,y,time=700){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>