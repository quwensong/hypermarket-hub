<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control v-show="isTabshow" class="tabcontrol" ref='tabcontrol' @tabclicked="tabclicked" :titles="['流行','新款','精选']"></tab-control>

    <scroll class="content"
            ref="Scroll"
            :probe-type="3"
            :pull-up="true"
            @pullingUp="loadMore"
            @scroll="contentScroll">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend class="home-recommend" :recommends="recommends"></home-recommend>
      <theweek-recommend></theweek-recommend>
      <tab-control ref='tabcontrol' @tabclicked="tabclicked" :titles="['流行','新款','精选']"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>

</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import TheweekRecommend from "./childComps/TheweekRecommend";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import NavBar from "@/components/common/navbar/NavBar";
import tabControl from "@/components/content/tabControl/tabControl";
import GoodsList from "@/components/content/goods/GoodsList";

import {getHomeMultidata,getHomeGood} from "@/network/home";

export default {
  name: "Home",
  components:{
    Scroll,
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TheweekRecommend,
    tabControl,
    GoodsList,
    BackTop
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
      currentType:'pop',
      isShowBack:false,
      offsetTop:0,
      isTabshow:false
      
    }
  },
  created() {
    //请求多个数据
    this.getHomeMultidatas()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){ 
  },
  updated () {
     // 获取tabcontrol的offsettop
    this.offsetTop = this.$refs.tabcontrol.$el.offsetTop
},
  methods:{
    //1、网络请求相关
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
        this.goods[type].list.push(...res.data.list)//数据保存
        this.goods[type].page += 1//搜索完成一遍自动加1

        })

    },
    // 2、事件监听相关方法
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
    },
    //回到顶部按钮的方法,(x,y,time)
    backClick(){
      this.$refs.Scroll.scrollToTop(0,0,700)
    },
    //监听滚动,超出一定范围显示BACKTOP按钮，默认隐藏
    contentScroll(position){
      // if(position.y>=0){
      //   console.log(position.y)

      // }

      this.isShowBack = position.y < -900

      //tabcontrol是否吸顶
      this.isTabshow = -position.y > this.offsetTop 
    },
    //上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
      // 上拉完成
      this.$refs.Scroll.finishPullUp()
      //重新计算位置
      this.$refs.Scroll.scroll.refresh()
    },
  }

}
</script>

<style scoped>

#home{
  position: relative;
  height: 100vh;
}

.home-nav{
  background-image: url("~@/assets/img/home/navbar/homenavbarback.png");
  background-size:100%;
  color: white;
  font-weight: bold;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10; */

}
.tabcontrol{
  position:relative;
  z-index:10;
}

.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom:49px;
  left: 0;
  right: 0;
}

</style>
