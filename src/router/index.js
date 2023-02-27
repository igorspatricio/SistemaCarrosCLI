import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pessoas from '../views/Pessoas.vue'
const routes = [
  {
    path: '/home',
    name: 'Home-Menu',
    component: Home,
  },
  {
    path: '/pessoas',
    name: 'Show-Pessas',
    component: Pessoas,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
