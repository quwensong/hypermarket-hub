<template>
    <scroll class="content" ref="scroll">
      <shop-list-item v-for="(item,index) in cartList" :key="index" :item-info="item" nfo = "item"></shop-list-item>
    </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import ShopListItem from "./ShopListItem";

import {mapGetters} from 'vuex'

export default {
  name: "ShopList",
  components:{
    Scroll,
    ShopListItem
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  },
  activated() {
    this.$ref.scroll.refresh()
    console.log("999")
  }

}
</script>

<style scoped>
.shop-list{

}
.content{
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}

</style>