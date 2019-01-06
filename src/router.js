import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = () => import('./pages/home')
const users = () => import('./pages/users')

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name: 'home', component: home },
      { path: '/users', name: 'users', component: users },
    ]
  })
}
