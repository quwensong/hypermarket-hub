<template>
  <div id="app">
<!--    保存页面状态，使得不被销毁-->
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar";

  export default {
    name: 'App',
    components:{
      MainTabBar
    }

  }
</script>


<style lang="scss">
@import "~@/assets/css/base.css";
@import "~@/assets/css/normalize.css";


</style>
