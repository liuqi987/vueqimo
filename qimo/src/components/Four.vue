<template>
  <div>
     <ul>
        <li v-for="(item,key) in list" :key="key">
          <img :src="'/static/img/'+item.productImage" alt />
          <h3>{{item.productName}}</h3>
          <h4>￥{{item.salePrice}}</h4>
          <Add :fun="item"></Add>
        </li>
      </ul>
  </div>
</template>
<script>
import Bus from "@/Bus";
import Add from "@/components/Add"
import Li from "@/components/Li"
export default {
  name: "One", components:{Add},
  data() {
    return {
    
      list: []
    };
  },

  mounted() {
    var a = this.$route.query.data;
     a.forEach(v => {
      if (v.salePrice > 1000 &&v.salePrice < 2000) {
          this.list.push(v)
      }
    });
  }
};
</script>
<style lang="scss">
</style>