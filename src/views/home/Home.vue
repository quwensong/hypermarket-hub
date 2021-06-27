<template>
  <div id="home">
<!--    首页导航栏-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>

</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components:{
    NavBar
  },
  data(){
    return {
      banner: {},
      recommend: {}
    }
  },
  created() {
  //  请求多个数据
    getHomeMultidata().then(res=>{
      console.log(res);
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list

    })

  }
}
</script>

<style scoped>

.home-nav{
  background-color: #ff8198;
  color: white;
}

</style>
