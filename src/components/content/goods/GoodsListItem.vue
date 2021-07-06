<template>
  <div class="goodslistitem" @click="goodItemClick">
    <img :src="showImg" alt="">
    <div class="title">{{goodsItem.title}}</div>
    <div class="priceAndfav">
      <span>¥{{goodsItem.price}}</span>
      <span><img src="@/assets/img/common/star.png" alt=""> {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed:{
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
,
  methods:{//监听每一个goodsitem的点击
    //item_id
    goodItemClick(){
      // this.$router.push('/detail/' + 1324)
      if(this.goodsItem.item_id){
        // this.goodsItem.iid = this.goodsItem.item_id
      }
      this.$router.push({ name: 'Detail', query: { iid: this.goodsItem.iid }})
    // console.log(this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
.goodslistitem{
  border-radius: 8px;
  margin-bottom: 5px;
}
.goodslistitem img{
  width: 100%;
  border-radius: 5px;
}
.priceAndfav{
  display: flex;
  font-size: 10px;
  justify-content: center;
}
.priceAndfav :nth-child(1){
  color: red;
  font-weight: bold;
}
.priceAndfav :nth-child(2){
  margin-left: 5px;
  font-weight: bold;
}
.priceAndfav :nth-child(2) img{
  width: 10px;
}
.title{
  font-size: 10px;
  text-indent: 12px;

  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}


</style>