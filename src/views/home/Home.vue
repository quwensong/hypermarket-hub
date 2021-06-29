<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend class="home-recommend" :recommends="recommends"></home-recommend>
    <theweek-recommend></theweek-recommend>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import TheweekRecommend from "./childComps/TheweekRecommend";
import tabControl from "@/components/content/tabControl/tabControl";

import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TheweekRecommend,
    tabControl
  },
  data(){
    return {
      banners: [],
      recommends: [],//推荐数据,
    }
  },
  created() {
  //  请求多个数据
    this.getHomeMultidatas()
  },
  methods:{
    getHomeMultidatas(){
      getHomeMultidata().then( res =>{
        //保存home首页数据
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
  
}
</script>

<style scoped>

#home{
  padding-top: 44px;
}

.home-nav{
  /* background-color: #ff8198; */
  /* hypermarket-hub\ */
  /* D:\webstudy\hypermarket-hub\public\recommend_bg.jpg */
  /* hypermarket-hub\public\ */
  background-image: url("~@/assets/img/home/navbar/homenavbarback.png");
  background-size:100%;
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;

}
.tab-control{
  margin-top: 10px;
  position: sticky;
  top: 55px;
}

</style>
