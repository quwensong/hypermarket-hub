<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#fea917">
      <img slot="item-icon" src="../../../assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/classify" activeColor="#299dff">
      <img slot="item-icon" src="../../../assets/img/tabbar/class.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/class_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="shop" activeColor="#fd6112">
      <img slot="item-icon" src="../../../assets/img/tabbar/shop.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/shop_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile" activeColor="#279cff">
      <img slot="item-icon" src="../../../assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>

</template>


<script>
import TabBar from "../../../components/common/tabbar/TabBar";
import TabBarItem from "../../../components/common/tabbar/TabBarItem";


export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style scoped>

</style>
