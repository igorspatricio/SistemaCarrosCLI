import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Pessoas from '../views/Pessoas.vue'
import Carros from '../views/Carros.vue'
import Revisao from '../views/Revisoes.vue'
import Relatorios from '../views/Relatorios.vue'

import CadastroCarros from '../views/CadastroCarro.vue'
import CadastroRevisao from '../views/CadastroRevisao'

const routes = [
  {
    path: '/Home',
    name: 'Route-Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Route-Menu',
    component: Home,
  },
  {
    path: '/Pessoas',
    name: 'Route-Pessas',
    component: Pessoas,
  },
  {
    path: '/Carros',
    name: 'Route-carros',
    component: Carros
  },
  {
    path: '/Carros/Cadastro/:cpf',
    name: 'Cadastro-carros-cpf',
    component: CadastroCarros
  },
  {
    path: '/Carros/Cadastro',
    name: 'Cadastro-carros',
    component: CadastroCarros
  },
  {
    path: '/Revisoes/Cadastro',
    name: 'Cadastro-revisao',
    component: CadastroRevisao
  },
  {
    path: '/Revisoes/Cadastro/:placa',
    name: 'Cadastro-revisao-placa',
    component: CadastroRevisao
  },
  {
    path: '/Revisoes',
    name: 'Route-Revisao',
    component: Revisao
  },
  {
    path: '/Relatorios',
    name: 'Route-Relatorios',
    component: Relatorios
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})  

export default router
