import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Fail from '@/views/Fail.vue'
import Game from '@/views/Game.vue'
import Settings from '@/views/Settings.vue'
import Success from '@/views/Success.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Game',
    component: Game
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
  history: createWebHistory(),
  routes
})

export default router
