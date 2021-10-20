import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AdminRoutes from '../routes/Admin/index'
import About from  '../views/About.vue'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:About
  }
  
]
const routes=[...AdminRoutes,...baseRoutes];

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
