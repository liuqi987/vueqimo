<template>
    <div>
         <span @click="cart()">加入购物车</span>
    </div>
</template>
<script>
export default {
    name:"Add",
    props:["fun"],
    methods:{
        cart(){
           var arr = JSON.parse(localStorage.getItem("cart"))||[]
           var obj = {
               _id:this.fun._id,
               productName:this.fun.productName,
               salePrice:this.fun.salePrice,
               productImage:this.fun.productImage,
               num:1,
              xuan:false
           }
           var index = arr.findIndex((v)=>{
               return v._id == this.fun._id
           })
           if(index>=0){
              arr[index].num++
           }else{
              
              arr.push(obj)
           }
           localStorage.setItem("cart",JSON.stringify(arr))
           this.$store.commit("cartData",arr)
        }
    }
}
</script>
<style lang="scss">
    
</style>