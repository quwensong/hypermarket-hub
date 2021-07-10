<template>
  <div class="toast">
    <div v-show="isShow">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,delay=1500){
      this.isShow = true
      this.message = message

      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },delay)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
  color: white;


  background-color: rgba(128, 128, 128, 0.76);
  }


</style>