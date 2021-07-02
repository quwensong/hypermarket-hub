<template>
  <div class="detail-swiper">
    <swiper  class="detail-swiper" >
      <swiper-item v-for ="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>

</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'


export default {
  name: "DetailSwiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 290px;
  overflow: hidden;
}
</style>