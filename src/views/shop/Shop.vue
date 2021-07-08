<template>
  <div class="shop">
<!--    导航-->
    <nav-bar class="navbar">
      <h4 class="shop-title" slot="center">购物车({{cartLength}})</h4>
    </nav-bar>
<!--    商品列表-->
    <shop-list></shop-list>
<!--    底部汇总工具栏-->
    <shop-button-bar></shop-button-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import ShopList from "./shopChildren/ShopList";
import ShopButtonBar from "./shopChildren/ShopButtonBar";

import { mapGetters } from 'vuex'

export default {
  name: "Shop",
  components:{
    NavBar,
    ShopList,
    ShopButtonBar
  },
  computed:{
    ...mapGetters([
        'cartLength'
    ])
    // getCount(){
    //   return this.$store.getters.cartLength
    // }
  }
}
</script>

<style scoped>
.navbar{
  margin-bottom: 5px;
}
.shop{
  height: 100vh;
}
.shop-title{
  margin: 0 auto;
}

</style>
