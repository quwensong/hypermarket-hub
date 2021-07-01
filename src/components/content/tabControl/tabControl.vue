<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index">
      <span @click="tabClick(index)" :class="{active:activeIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }

    }
  },
  data(){
    return {
      activeIndex:0
    }
  },
  methods:{
    tabClick(index){
      this.activeIndex = index
      this.$emit('tabclicked',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  font-size: 14px;
  justify-content: space-evenly;
  text-align: center;
  background-color: white;
  height: 35px;
  line-height:30px ;
  font-weight: bold;
}
.active{
  border-bottom: 3px red solid;
  padding-bottom: 5px;
}

</style>