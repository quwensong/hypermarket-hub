<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sell-count">
            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="good-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better' : item.isBetter}"><span>{{item.score}}</span></td>
            <td class="better" :class="{'better-more' : item.isBetter}"><span>{{ item.isBetter ? '高' : '低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellCountFilter:function (value) {
      if(value < 10000) return value
      return  (value/10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info{
  height: 140px;
  border-bottom: 7px rgba(220, 219, 219, 0.4) solid;
}
.shop-top{
  display: flex;
  justify-content: start;
  align-items: center;

}
.shop-top img{
  width: 60px;
  margin-left: 25px;
}
.shop-top span{
  display: inline-block;
  margin-left: 5px;
  font-size: 18px;
  font-weight:bold;
}
.shop-middle{
  display: flex;
  justify-content: space-between;
}
.shop-middle-left{
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.shop-middle-right{
  margin:  0 auto;
  width: 50%;
}
.shop-middle-right table{
  width: 85%;
  vertical-align:middle;
}
.good-count{
  font-weight:bold;
}
.sell-count{
  font-weight:bold;
}
.score{
  color: #34cb34;

}
.score-better{
  color: red;
}
.better{
  margin-left: 5px;
  background-color: #34cb34;
  color: #f6f6f6;
  text-align: center;
}
.better-more{
  color:white;
  background-color: red;
  text-align: center;
}


</style>