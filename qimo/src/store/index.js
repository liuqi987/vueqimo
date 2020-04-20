import Vue from "vue"
import vuex from "vuex"
Vue.use(vuex)
var store = new vuex.Store({
    state: {
        list: JSON.parse(localStorage.getItem("cart")) || [],
        all:false
    },
    mutations: {
        cartData(state, info) {
            state.list = info
        },
        jia(state, n) {
            state.list[n].num++;
            localStorage.setItem("cart",JSON.stringify(state.list))
        },
        jian(state, n) {
            state.list[n].num--;
            if (state.list[n].num < 0) {
                alert("您确定要删除吗")
                state.list.splice(n, 1)
            }
            localStorage.setItem("cart",JSON.stringify(state.list))
        },
        del(state,n){
            state.list.splice(n,1)
            localStorage.setItem("cart",JSON.stringify(state.list))
        },
        //全选
        qx(state){
            state.all = !state.all
            state.list.forEach((v)=>{
                v.xuan = state.all
            })
            localStorage.setItem("cart",JSON.stringify(state.list))
        },
        // 全选跟随
        itemchange(state,n){
            state.list[n].xuan = ! state.list[n].xuan
            var r = state.list.every((v)=>{
                return v.xuan
            })
            state.all = r
        }
    },
    actions: {

    },
    getters: {
       sum(state){
           var s = 0;
           state.list.forEach((v)=>{
               if(v.xuan){
                 s+= v.salePrice*v.num
               }           
           }) 
           return s
       }
    }
})

export default store