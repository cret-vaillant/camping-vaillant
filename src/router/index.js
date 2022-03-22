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
  routes,
  scrollBehavior (to, from) {
    if (to.name === 'Index' && from.name === 'Post') {
      return {
        selector: `#${from.params.slug}`,
        offset: { y: 40 },
        behavior: 'smooth'
      }
    } else if (to.name === 'Post' && from.name === 'Index') {
      return {
        x: 0, y: 0 ,
        behavior: 'smooth'
      }
    }
    return { x: 0, y: 0 } 
  }
})

export default router
