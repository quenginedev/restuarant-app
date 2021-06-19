import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FastFood',
    component: ()=>import('@/views/FastFood')
  },
  {
    path: '/',
    name: 'Pastries',
    component: ()=>import('@/views/Pastries')
  },
  {
    path: '/',
    name: 'Drinks',
    component: ()=>import('@/views/Drinks')
  },
  {
    path: '/',
    name: 'Main',
    component: ()=>import('@/views/Main')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ()=>import('@/views/Cart')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
