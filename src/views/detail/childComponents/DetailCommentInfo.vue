<template>
  <div class="comment-info" v-if="Object.keys(CommentInfo).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header -more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-user">
        <img :src="CommentInfo.user.avatar" alt="">
        <span>{{CommentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
        <p>{{CommentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{CommentInfo.created | showDate}}</span>
        <span class="second-span">{{CommentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item,index) in CommentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "DetailCommentInfo",
  props:{
    CommentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value * 1000)
      return formatDate(date,'yyyy-MM-dd hh:mm:ss')
    }
  }

}
</script>

<style scoped>
.comment-info{
  border-bottom:  7px rgba(128, 128, 128, 0.09) solid;
  padding-bottom: 20px;
}
.info-header{
  display: flex;
  justify-content: space-between;
  padding: 5px 5px 10px 5px ;
  border-bottom: 1px rgba(128, 128, 128, 0.31) solid;
}
.info-user{
  padding: 5px 5px 10px 5px ;
  display: flex;
  background-color: white;
}
.info-user img{
  width: 15%;
  padding-right: 10px;
}
.info-user span{
  align-self: center;
}
.info-detail{
  font-size: 14px;
  background-color: white;
}
.info-detail img{
  width: 20%;
  margin-right: 20px;
  margin-top: 8px;

}
.info-imgs{
  display: flex;
  justify-content: start;
  padding-left: 5px;
}
.second-span,.date{
  font-size: 10px;
  margin-right: 10px;
}
</style>