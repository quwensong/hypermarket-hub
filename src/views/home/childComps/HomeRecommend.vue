<template>
  <div class="HomeRecommend">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.HomeRecommend{
  display: flex;
  height: 105px;
  justify-content: space-evenly;
  padding: 15px 0 30px;
  border-bottom: 8px #e6e6e6 solid;
}
.HomeRecommend img{
  height: 55px;
}
.HomeRecommend a div{
  font-size: 12px;
}
</style>