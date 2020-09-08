import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Fail from '@/views/Fail.vue'
import Home from '@/views/Home.vue'
import Settings from '@/views/Settings.vue'
import Success from '@/views/Success.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fail',
    name: 'Fail',
    component: Fail
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
