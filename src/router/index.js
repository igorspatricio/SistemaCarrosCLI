import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pessoas from '../views/Pessoas.vue'
import Carros from '../views/Carros.vue'
const routes = [
  {
    path: '/home',
    name: 'Route-Menu',
    component: Home,
  },
  {
    path: '/pessoas',
    name: 'Route-Pessas',
    component: Pessoas,
  },
  {
    path: '/carros',
    name: 'Route-carros',
    component: Carros
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
