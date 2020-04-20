<template>
  <div>
    <p>
      <span>login</span>
      <i @click="sort()" v-show="show">👆</i>
      <i @click="sort()" v-show="!show">👇</i>
      <i @click="tiao()" style="marginLeft:0;fontSize:25px;" class="fa fa-cart-arrow-down" aria-hidden="true"></i>
    </p>
    <div class="car">
      <div class="left">
        <van-sidebar v-model="activeKey">
          <router-link to="/home/all">
            <van-sidebar-item title="All" />
          </router-link>
          <van-sidebar-item title="0.00-100.00" @click="send()" />
          <van-sidebar-item @click="send1()" title="100.00-500.00" />
          <van-sidebar-item @click="send2()" title="500.00-1000.00" />
          <van-sidebar-item @click="send3()" title="1000.00-2000.00" />
        </van-sidebar>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from "@/Bus";
import { Notify } from "vant";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      activeKey: 0,
      show: false
    };
  },
  methods: {
    sort() {
      if (this.show) {
        this.list.sort((a, b) => {
          return a.salePrice - b.salePrice;
        });
      } else {
        this.list.sort((a, b) => {
          return b.salePrice - a.salePrice;
        });
      }
      this.show = !this.show;
      Bus.$emit("all", this.list);
    },
    send() {
      this.$router.push({ path: "/home/one", query: { data: this.list } });
    },
    send1() {
      this.$router.push({ path: "/home/two", query: { data: this.list } });
    },
    send2() {
      this.$router.push({ path: "/home/three", query: { data: this.list } });
    },
    send3() {
      this.$router.push({ path: "/home/four", query: { data: this.list } });
    },
    tiao() {
      this.$router.push({ path: "/cart" });
    }
  },
  created() {
    Bus.$on("allData", data => {
      this.list = data;
    });
  }
};
</script>
<style lang="scss">
.van-notify {
  display: none;
}
p {
  position: relative;
  line-height: 50px;
  background-color: #fff;
  width: 100%;
  height: 50px;
  span {
    position: absolute;
    right: 200px;
    margin-left: 20px;
  }

  i {
    cursor: pointer;
    margin-left: 1200px;
  }
}
.car {
  width: 100%;
  height: 800px;
  background-color: #eee;
  display: flex;
  justify-content: space-around;
  .left {
    width: 200px;
  }
  .van-sidebar {
    padding-top: 100px;
    box-sizing: border-box;
    width: 200px;
    a {
      width: 200px;
      height: 50px;
      line-height: 15px;
      text-align: center;
      display: block;
    }
  }
}
</style>