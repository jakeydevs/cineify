import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: 'movie',
    name: 'Movie',
    props: true,
    component: () => import('../views/Movie.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
