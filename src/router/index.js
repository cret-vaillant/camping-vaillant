import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:sectionName?',
    name: 'Content',
    component: Content,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
