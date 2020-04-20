import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import All from '@/components/All'
import Two from '@/components/Two'
import Three from '@/components/Three'
import Four from '@/components/Four'
import One from '@/components/One'
import Cart from '@/components/Cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'all',
          name: 'All',
          component: All,
        }, {
          path: 'one',
          name: 'One',
          component: One,
        }, {
          path: 'two',
          name: 'Two',
          component: Two,
        }, {
          path: 'three',
          name: 'Three',
          component: Three,
        }, {
          path: 'four',
          name: 'Four',
          component: Four,
        }, {
          path: "",
          redirect: "/home/all"
        }
      ]
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    }, {
      path: "/",
      redirect: "/home"
    }
  ]
})
