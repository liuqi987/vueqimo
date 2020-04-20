<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <ul>
        <li v-for="(item,key) in list" :key="key">
          <img :src="'/static/img/'+item.productImage" alt />
          <h3>{{item.productName}}</h3>
          <h4>￥{{item.salePrice}}</h4>
          <Add :fun="item"></Add>
        </li>
      </ul>
    </van-list>
  </div>
</template>

<script>
import Add from "@/components/Add"
import Li from "@/components/Li"
import Bus from "@/Bus";
export default {
  name: "All",
  components:{Add,Li},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      all: [],
      num: 8,
      page: 0
    };
  },
  mounted() {
    this.$axios.get("/static/json/data.json").then(res => {
      this.all = res.data.result.list;
      this.list = res.data.result.list.slice(0, 8);
    });
    this.$axios.get("/static/json/data2.json").then(res => {
      var data = res.data.result.list;
      data.forEach(v => {
        this.all.push(v);
      });
    });
    this.$axios.get("/static/json/data3.json").then(res => {
      var data1 = res.data.result.list;
      data1.forEach(v => {
        this.all.push(v);
         Bus.$emit("allData",this.all)
      });
    });
   
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        this.page += 8;
        this.num += 8;
        var data = this.all.slice(this.page, this.num);
        data.forEach(v => {
          this.list.push(v);
        });

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.all.length) {
          this.finished = true;
        }
      }, 3000);
    }
  },
  created(){
      Bus.$on("all",(data)=>{
          this.list = data
      })
  }
};
</script>
<style lang="scss">
@media only screen and (min-width: 900px) {
  .right {
    width: 1000px;
    height: 100%;
    margin-top: 20px;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li:hover{
          width:22.3%;
          border:1px solid red;
          transition:2s;
      }
      li {
        width: 22%;
        height: 330px;
        margin-bottom: 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        img {
          width: 100%;
          height: 200px;
        }
        h3 {
          font-size: 13px;
          margin-bottom: 30px;
          text-indent: 5px;
        }
        h4 {
          font-weight: normal;
          color: red;
          text-indent: 5px;
          margin-bottom: 15px;
        }
        span {
          width: 96%;
          height: 25px;
          font-size: 15px;
          color: red;
          line-height: 25px;
          border: 1px solid red;
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
  .left {
    display: block;
  }
}
html,
body {
  height: 100%;
  background-color: #eee;
}
@media only screen and (min-width: 650px) and (max-width: 900px) {
  //中等分辨率 PC小分辨率、平板
  .right {
    width: 1000px;
    height: 100%;
    margin-top: 20px;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 30%;
        height: 330px;
        margin-bottom: 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        img {
          width: 100%;
          height: 200px;
        }
        h3 {
          font-size: 13px;
          margin-bottom: 30px;
          text-indent: 5px;
        }
        h4 {
          font-weight: normal;
          color: red;
          text-indent: 5px;
          margin-bottom: 15px;
        }
        span {
          width: 96%;
          height: 25px;
          font-size: 15px;
          color: red;
          line-height: 25px;
          border: 1px solid red;
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
}

@media only screen and (min-width: 450px) and (max-width: 650px) {
  .right {
    width: 1000px;
    height: 100%;
    margin-top: 20px;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 45%;
        height: 330px;
        margin-bottom: 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        img {
          width: 100%;
          height: 200px;
        }
        h3 {
          font-size: 13px;
          margin-bottom: 30px;
          text-indent: 5px;
        }
        h4 {
          font-weight: normal;
          color: red;
          text-indent: 5px;
          margin-bottom: 15px;
        }
        span {
          width: 96%;
          height: 25px;
          font-size: 15px;
          color: red;
          line-height: 25px;
          border: 1px solid red;
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .right {
    width: 1000px;
    height: 100%;
    margin-top: 20px;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 100%;
        height: 330px;
        margin-bottom: 15px;
        background-color: #fff;
        border: 1px solid #ccc;
        img {
          width: 100%;
          height: 200px;
        }
        h3 {
          font-size: 13px;
          margin-bottom: 30px;
          text-indent: 5px;
        }
        h4 {
          font-weight: normal;
          color: red;
          text-indent: 5px;
          margin-bottom: 15px;
        }
        span {
          width: 96%;
          height: 25px;
          font-size: 15px;
          color: red;
          line-height: 25px;
          border: 1px solid red;
          display: block;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
}
</style>