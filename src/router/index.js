import Vue from 'vue'
import VueRouter from 'vue-router'
import AppScreen from '@/screens/AppScreen'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AppScreen',
    component: AppScreen
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
