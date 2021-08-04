import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue'
import AboutMe from '../views/AboutMe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/',
    name: 'About Me',
    component: AboutMe
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutMe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
