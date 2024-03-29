import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '../views/Projects.vue'
import AboutMe from '../views/AboutMe.vue'
import CV from '../views/CV.vue'
import AboutPage from '../views/AboutThisPage.vue'
import Blog from '../views/Blog.vue'
import Intro from '../views/Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Intro
  },
  {
    path: '/about-me',
    name: 'About Me',
    component: AboutMe
  },
  {
    path: '/about-page',
    name: 'About Page',
    component: AboutPage
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
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: "/blog",
    component: Blog,
    beforeEnter() {
      window.location.href = "https://blog.tordlangedalness.com";
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
