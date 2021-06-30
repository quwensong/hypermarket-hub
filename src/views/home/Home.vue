<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend class="home-recommend" :recommends="recommends"></home-recommend>
    <theweek-recommend></theweek-recommend>
    <tab-control @tabclicked="tabclicked" class="tab-control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
    <ul>

      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>

</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import TheweekRecommend from "./childComps/TheweekRecommend";

import NavBar from "@/components/common/navbar/NavBar";
import tabControl from "@/components/content/tabControl/tabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {getHomeMultidata,getHomeGood} from "@/network/home";

export default {
  name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TheweekRecommend,
    tabControl,
    GoodsList
  },
  data(){
    return {
      banners: [],
      recommends: [],//推荐数据
      goods:{//所有商品保存
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  created() {
  //  请求多个数据
    this.getHomeMultidatas()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    this.getHomeGoods('sell')



  },
  methods:{
    ////////////////// 网络请求相关/////////////////////
    getHomeMultidatas(){
      getHomeMultidata().then( res =>{
        //保存home首页数据
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGood(type,page).then( res =>{
        this.goods[type].list = res.data.list//数据保存
      })
      this.goods[type].page += 1//搜索完成一遍自动加1
    },
  ///////////////  其他方法/////////////
    tabclicked(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    }
  }
  
}
</script>

<style scoped>

#home{
  padding-top: 44px;
}

.home-nav{

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
  background-color: white;
  position: sticky;
  top: 44px;
  height: 35px;
  line-height:30px ;
}

</style>
