<template>
  <div>
    <button @click="fan()">返回</button>
    <ol class="cartt">
      <li>  
        <span style="width:500px;">ITEMS</span>
        <span style="width:160px;">PRICE</span>
        <span style="width:200px;">QUANILTY</span>
        <span style="width:250px;">SUBTOTAL</span>
        <span>EDIT</span>
      </li>
      <li v-for="(item,key) in list" :key="key">
        <span style="width:100px;">
          <input class="check" type="checkbox" :id="key" v-model="item.xuan" @click="itemchange(key)" />
          <label :for="key">√</label>
        </span>
        <img :src="'/static/img/'+item.productImage" alt />
        <h3>{{item.productName}}</h3>
        <h4>￥{{item.salePrice}}</h4> 
        <p>
          <button @click="jia(key)">+</button>
          <span>{{item.num}}</span>
          <button @click="jian(key)">-</button>
        </p>
        <span style="marginLeft:150px;">￥{{item.num*item.salePrice}}</span>
        <button style="width:80px;height:30px;marginLeft:200px;" @click="del(key)">删除</button>
      </li>
    </ol>
      <div class="bottom">
      <span class="allxuan" :class="{yes:$store.state.all}" @click="qx()">√</span>
      <span style="marginLeft:10px;">全选</span>
      <p>
        合计：
        <span>￥{{this.$store.getters.sum}}</span>
      </p>
      <button>
        去结算
        <span>({{list.length}})</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      list: this.$store.state.list,
      activeIcon: "https://img.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img.yzcdn.cn/vant/user-inactive.png",
      //all:this.$store.state.all  直接使用 不然会有缓存 刷新之后才会显示
    };
  },
  methods: {
    jia(n) {
      this.$store.commit("jia", n);
    },
    jian(n) {
      this.$store.commit("jian", n);
    },
    del(n) {
      this.$store.commit("del", n);
    },
    qx(){
     this.$store.commit("qx")
    },
    fan(){
        this.$router.go(-1)
    },
    itemchange(n){
        this.$store.commit("itemchange",n)
    }
  }
};
</script>
<style lang="scss" scoped>

// 选
.check{
    display: none;
}
.check+label,.allxuan {
  width: 20px;
  height: 20px;
  display: block;
  border: 1px solid #c8c9cc;
  border-radius: 50%;
  color:#fff;
}
.check:checked+label,.yes {
  width: 20px;
  height: 20px;
  display: block;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #c8c9cc;
  border-radius: 50%;
  background-color: green;
  color: white;
}
.bottom {
  display: flex;
  height: 50px;
  width: 100%;
  border-top: 10px solid #eee;
  position: absolute;
  align-items: center;
  bottom: 55px;
  left: 0;
  padding-left: 15px;
  box-sizing: border-box;
  font-size: 14px;
  p {
    margin-left: 50px;
    font-size: 13px;
    span {
      color: plum;
      font-size: 15px;
    }
  }
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 120px;
    height: 40px;
    color: #fff;
    background-color: #ccc;
    text-align: center;
    line-height: 40px;
    font-size: 13px;
    border: none;
  }
}
ol {
  width: 100%;
  li {
    display: flex;
    margin-bottom: 20px;
    img {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      margin: 0 30px;
    }
    h3 {
      font-size: 13px;
      width: 200px;
    }
    h4 {
      font-size: 14px;
      font-weight: normal;
      margin-left: 100px;
    }
    p {
      display: flex;
      margin-left: 100px;
      button {
        width: 20px;
        height: 20px;
        background-color: #eee;
        border: none;
      }
      span {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        display: inline-block;
      }
    }
  }
}
</style>