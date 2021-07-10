import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "@/views/home/Home";

Vue.use(VueRouter)

const routes = [
  {
    path:'/index.html',
    name: 'Home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: ()=>import("@/views/classify/Classify"),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ()=>import("@/views/shop/Shop"),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ()=>import("@/views/profile/Profile"),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: ()=>import("@/views/detail/Detail"),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
