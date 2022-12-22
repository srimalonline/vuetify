import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../Home.vue'

Vue.useAttrs(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // router level code-splitting
    // this generates a separate chunk (about. [hash].js) for this route
    //which is lazy-loaded when the router is visited.
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
