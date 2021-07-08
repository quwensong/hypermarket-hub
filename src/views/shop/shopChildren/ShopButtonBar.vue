<template>
  <div class="shop-button-bar">
    <div class="check-left"  @click="checkAll">
      <check-button :is-active="isCheckAll"></check-button>
      <span>全选</span>
    </div>

    <div>
      合计:{{totalPrice}}
    </div>
    <div class="cal-right">
      去结算({{$store.getters.cartLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";


export default {
  name: "ShopButtonBar",
  components:{
    CheckButton
  },
  computed:{
    totalPrice(){
      return '¥' + this.$store.getters.cartList.filter(item => {
        return item.check
      }).reduce((pre,item) => {
        return pre + item.price * item.count
      },0).toFixed(2)
    },
    isCheckAll(){
      if( this.$store.getters.cartList.length === 0){
        return false
      }else {
        return !(this.$store.getters.cartList.filter(item => {
          return !item.check
        }).length)
      }
    }
  },
  methods:{
    checkAll(){
      if(this.isCheckAll){
        this.$store.getters.cartList.forEach(item => item.check = false)
      }else{
        this.$store.getters.cartList.forEach(item => item.check = true)
      }
    }
  }
}
</script>

<style scoped>
.shop-button-bar{
  height: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  background-color: rgba(169, 169, 169, 0.29);
}
.check-left{
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;

}
.check-left span{
  margin-left: 5px;
}
.cal-right{
  background-color:#ff5300;
  color: white;
  height: 100%;
  width: 70px;
  text-align: center;
  line-height: 40px;
}
</style>