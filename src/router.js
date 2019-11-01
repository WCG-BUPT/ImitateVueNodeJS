import Vue from 'vue'
import Router from 'vue-router'
import Home from './view/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: Topic
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/topic',
      redirect: '/'
    },
    {
      path: '/user',
      redirect: '/'
    }
  ]
})