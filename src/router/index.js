import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'
import City from '../views/City'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: Home,
    component: Home
  },
  {
    path: '/home',
    name: Home,
    component: Home
  },
  {
    path: '/detail/:id',
    name: Detail,
    component: Detail
  },
  {
    path: '/city',
    name: City,
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
