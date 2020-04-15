import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import NotFound from '../components/404.vue'
// import Portfolio from '../components/Portfolio.vue'
// import Snake from '../components/Snake.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/portfolio',
  //   name: 'portfolio',
  //   component: Portfolio
  // },
  // {
  //   path: '/snake',
  //   name: 'snake',
  //   component: Snake
  // },
  {
    path: '*',
    name: 404,
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
