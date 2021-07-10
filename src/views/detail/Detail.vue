<template>
  <div class="detail">
    <detail-nav-bar ref="nav" class="detail-nav-bar" @titleClick="titleClick"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="ContentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
      <detail-item-params ref="params" :item-params="itemParams"></detail-item-params>
      <detail-comment-info ref="comments" :comment-info="commentInfo"></detail-comment-info>
      <goods-list ref="goodslist" class="good-list" :goods = "recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addcart"></detail-bottom-bar>
<!--    <toast class="toast" message="hhh"></toast>-->
  </div>

</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./detailswiper/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailItemParams from "./childComponents/DetailItemParams";
import DetailCommentInfo from "./childComponents/DetailCommentInfo";
import DetailBottomBar from "./childComponents/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";
// import Toast from "@/components/common/toast/Toast";

import {getDetail,Goods,Shop,getRecommend} from "@/network/detail";

import DetailShopInfo from "./childComponents/DetailShopInfo";

export default {
  name: "Detail",
  components:{
    DetailShopInfo,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailGoodsInfo,
    DetailItemParams,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    // Toast

  },
  data(){
    return {
      iid:null,
      detailMsg:{},
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      CommentInfo:{},
      recommends:[],
      themTopY:[],
      currentIndex:0
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
      //4、取出详情信息
      this.detailInfo = data.detailInfo
      //6、取出参数信息
      this.itemParams = data.itemParams
      //7、获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
      this.$nextTick(()=>{

      })

    })
      //8、请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  methods:{
    titleClick(index){
      this.themTopY = []
      this.themTopY.push(0)
      this.themTopY.push(this.$refs.params.$el.offsetTop)
      this.themTopY.push(this.$refs.comments.$el.offsetTop)
      this.themTopY.push(this.$refs.goodslist.$el.offsetTop)

      this.$refs.scroll.scroll.scrollTo(0,-this.themTopY[index],400)

    },
    // 根据滚动距离来改变导航栏颜色
    ContentScroll(position){
      const positionY = -position.y

      let length = this.themTopY.length
      for(let i = 0 ;i < length; i++){
        if(this.currentIndex !== i && (i < length -1 && positionY >= this.themTopY[i] && positionY < this.themTopY[i+1])
        || (i === length-1 && positionY >= this.themTopY[i])){
          this.currentIndex = i
          // 关键代码
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      
    },
    //加入购物车
    addcart(){
      const product = {}
      product.img = this.topImages[0]
      product.title = this.goods.title
      product.price = this.goods.realPrice
      product.iid = this.iid

      // this.$store.commit('addCart',product)
      this.$store.dispatch('addCart',product).then( res => {

        this.$toast.show(res,1500)
      })
    }

  }
}
</script>

<style scoped>
/*.toast{*/
/*  position: fixed;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  color: white;*/
/*  background-color:rgba(0,0,0,0.5);*/
/*  transform:translate(-50%,-50%);*/
/*}*/

.detail{
  position: relative;
  z-index: 13;
  background-color: #ffffff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px);
}
.detail-nav-bar{
  position: relative;
  z-index: 16;
  background-color: #f6f6f6;
}
.good-list{
  margin-top: 5px;
}
</style>