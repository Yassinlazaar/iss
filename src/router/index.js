import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shared with me',
    name: 'Shared with Me',
    component: () => import('../views/Shared with Me.vue')
  },
  {
    path: '/my documents',
    name: 'My documents',
    component: () => import('../views/My documents.vue')
  },
  {
    path: '/communities',
    name: 'Communities',
    component: () => import('../views/Communities.vue')
  },

  {
    path: '/organisations',
    name: 'Organisations',
    component: () => import('../views/Organisations.vue')
  },
  
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router

