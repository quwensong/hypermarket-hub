<template>
  <div class="shoplistitem">
    <check-button @click.native="CheckButtonClick" class="select" :is-active="itemInfo.check"></check-button>
    <div class="item-img">
      <img :src="itemInfo.img" alt="">
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  name: "ShopListItem",
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components:{
    CheckButton
  },
  methods:{
    CheckButtonClick(){
      this.itemInfo.check = !this.itemInfo.check
    }
  }
}
</script>

<style scoped>
.shoplistitem{
  display: flex;
  height: 90px;
  justify-content: center;
  align-items: center;

  border-bottom: 1px rgba(128, 128, 128, 0.51) solid;

}
.select{
  width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.item-img{
  width: 20%;
  margin-top: 5px;
  padding:5px 5px 5px 5px ;
  overflow: hidden;


}
.item-img img{
  width: 100%;
  height: 100%;
  object-fit:cover;
  border-radius: 4px;
}
.item-info{
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title{
}
.info-bottom{

}
.item-price{
  color: #fe5f16;
}
</style>