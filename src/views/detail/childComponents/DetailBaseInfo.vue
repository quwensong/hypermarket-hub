<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.realPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item"
            v-for="index in goods.services.length-1"
            :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goods:{
      type:Object,
      default:{}
    }
  }
}
</script>

<style scoped>
.info-title{
  font-weight: bold;
  width: 96%;
  margin: 8px auto;
  color: black;
}
.info-price{
  margin-top: 8px;

}
.n-price{
  font-size: 25px;
  color: red;
  margin-left: 15px;
}
.o-price{
  margin-left: 10px;
  text-decoration: line-through;
  color: gray;
}
.info-other{
  display: flex;
  justify-content: space-between;
  color: gray;
  font-size: 15px;
  padding-bottom: 12px;
  width: 95%;
  margin: 16px auto;
  border-bottom: 1px #dccece solid;
}
.info-service{
  display: flex;
  width: 95%;
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 10px;
  margin: 16px auto;
  border-bottom: 7px rgba(220, 219, 219, 0.4) solid;
}
.info-service-item{

}
.info-service-item img{
  width: 14px;
}
.info-service-item span{

}
</style>