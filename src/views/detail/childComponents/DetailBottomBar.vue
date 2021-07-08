<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  z-index: 20;
  display: flex;
  justify-content: space-evenly;
}
.bar-item.bar-left{

  background-color: white;
  display: flex;
  justify-content: space-between;
}
.bar-item.bar-right{
  display: flex;
}
.bar-left {
  display: flex;
  align-items: center;
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
}
.bar-right{
  width: 50%;
  display: flex;
  text-align: center;
  line-height: 49px;
}
.cart{
  background-color: yellow;
  width: 60%;
}
.buy{
  background-color: red;
  width: 40%;
  color: white;
}
.icon{
  width: 22px;
  margin: 0 auto;
  height: 22px;
  display: block;
  background: url("~@/assets/img/detail/spider.png");
  background-size:auto 22px;

}
.shop{
  background-position: -22px 0;
}
.select{
  background-position: -44px 0;
}
</style>