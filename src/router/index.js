import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from '@/views/ProductsPage/ProductsPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
