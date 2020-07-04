import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/flipList',
    name: 'flipList',
    component: () => import('@/views/FlipList.vue')
  },
  {
    path: '/divChange',
    name: 'divChange',
    component: () => import('@/views/DivChange.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
