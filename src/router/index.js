import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import PostView from '../views/PostView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/:slug',
    name: 'Post',
    component: PostView,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
