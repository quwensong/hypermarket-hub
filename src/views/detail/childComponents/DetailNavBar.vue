<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="leftImgclick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="centertitle">
        <div v-for="(item,index) in titles" @click="detailClick(index)" :class="{active : currentIndex === index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    detailClick(index){
      this.currentIndex = index
      this.$emit('titleClick',index)
    },
    leftImgclick(){//返回
      this.$router.back()
    //  或者 this.$router.go(-1)
    },

  }
}
</script>

<style scoped>
.nav-bar{
  box-shadow: none;
}
.centertitle{
  display: flex;
  justify-content: space-evenly;
  align-items: center;

}
.active {
  color: red;
}
.back img{
  width: 24px;
  vertical-align: middle;
}

</style>