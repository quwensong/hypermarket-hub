<template>
  <div class="goods">
    <goods-list-item class="goods-list-item" v-for="item in goods" :key="item.iid" :goods-item="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }

  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

}
.goods-list-item{
  width: 45%;

}

</style>