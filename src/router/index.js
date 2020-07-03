import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/flipList',
    name:'flipList',
    component:()=>import('@/views/FlipList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
