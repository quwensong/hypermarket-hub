<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"
           :src="item" @load="" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.info-desc{
  height: 120px;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 7px rgba(128, 128, 128, 0.09) solid;
}
.desc{
  margin: 10px 10px 10px 10px;
}
.start{
  border-bottom:1px black solid;
  width: 40%;
}
.start:before{
  content:'';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color:black;
}
.end:after{
  content:'';
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  bottom: 0;
  right: 0;
  background-color: black;
}
.end{
  position: relative;
  border-bottom:1px black solid;
  width: 40%;
  left: 60%;
}
.info-list{
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 16px;
  border-bottom: 7px rgba(128, 128, 128, 0.09) solid;

}
.info-list img{
  width: 100%;
  margin-bottom: 5px;
}
.info-key{
  margin-top: 75px;
}
</style>