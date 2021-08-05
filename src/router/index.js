import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue'
import AboutMe from '../views/AboutMe.vue'
import CV from '../views/CV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About Me',
    component: AboutMe
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/cv',
    name: 'CV',
    component: CV
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
