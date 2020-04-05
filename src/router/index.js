import Vue from 'vue'
import VueRouter from 'vue-router'
import Pantry from '../views/Pantry.vue'
import Create from '../views/create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Pantry',
    component: Pantry
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/Browse',
    name: 'Genre-Browse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Browse.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
