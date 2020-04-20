<template>
    <div>
        <li v-for="(item,key) in list" :key="key">
          <img :src="'/static/img/'+item.productImage" alt />
          <h3>{{item.productName}}</h3>
          <h4>￥{{item.salePrice}}</h4>
          <Add :fun="item"></Add>
        </li>
    </div>
</template>
<script>
export default {
    name:"Li"
}
</script>
<style lang="scss">
    
</style>