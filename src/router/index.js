import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/flipList'
  },
  {
    path: '/flipList',
    name: 'flipList',
    component: () => import('@/views/FlipList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
