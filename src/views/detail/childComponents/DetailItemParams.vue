<template>
  <div class="detail-item-params" v-if="Object.keys(itemParams).length !== 0">
    <table v-for="(table,index) in itemParams.rule.tables" class="info-size" :key="index">
      <tr v-for="(tr,index) in table" :key="index">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(info,index) in itemParams.info.set">
        <td class="params-key">{{info.key}}</td>
        <td class="params-value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailItemParams",
  props:{
    itemParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-item-params{
  display:flex ;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  border-bottom:  7px rgba(128, 128, 128, 0.09) solid;
  padding-bottom: 20px;
}
.info-size{
  width: 80%;
  margin-top: 10px;
  border-collapse: collapse;
  border-spacing: 0;
  text-align:left;

}
.info-size td{
 padding:3px;
}
.info-params{
  width: 80%;
  margin-top: 10px;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
}
.info-params td:nth-child(2){
  color: red;
  padding-left: 20px;

}
.info-params td{
  padding:3px;
  border-bottom: 1px rgba(128, 128, 128, 0.31) solid;
}

</style>