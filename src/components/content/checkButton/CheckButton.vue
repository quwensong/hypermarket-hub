<template>
  <div class="check-button" :class="{check:isActive}">
    <img src="~@/assets/img/common/check.png" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isActive:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.check-button{
  background-color: white;
  border-radius: 50%;
  border: 2px solid #aaa;
}
.check-button img{
  width: 16px;
  height: 16px;
}
.check-button{
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.check{
  border-color: red ;
  background-color: red;
  width: 16px;
  height: 16px;
}
</style>