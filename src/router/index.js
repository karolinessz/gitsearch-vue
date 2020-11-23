import Vue from 'vue'
import VueRouter from 'vue-router'
import UserInput from '../UserInput/index'
import UserOutput from '../UserOutput/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserInput',
    component: UserInput
  },
  {
    path: '/about',
    name: 'UserOutput',
    component: UserOutput,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
