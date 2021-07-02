<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>
  </div>

</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./detailswiper/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";

import Scroll from "@/components/common/scroll/Scroll";

import {getDetail,Goods,Shop} from "@/network/detail";
import DetailShopInfo from "./childComponents/DetailShopInfo";

export default {
  name: "Detail",
  components:{
    DetailShopInfo,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll
  },
  data(){
    return {
      iid:null,
      detailMsg:{},
      topImages:[],
      goods:{},
      shop:{}
    }
  },
  activated() {//跳转到详情页的时候保存 iid 的值
    this.iid = this.$route.query.iid
    getDetail(this.iid).then( res => {
      //1、获取顶部轮播图
      this.topImages = res.result.itemInfo.topImages
      const data = res.result//获取所有信息
      //2、商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //3、店铺信息
      this.shop = new Shop(data.shopInfo)
    })
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 13;
  background-color: #ffffff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
.detail-nav-bar{
  position: relative;
  z-index: 16;
  background-color: #f6f6f6;
}
</style>