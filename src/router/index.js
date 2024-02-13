import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AccountView from '../views/AccountView.vue'
import HeistView from '../views/HeistView.vue'
import HeistCreateViewVue from '../views/HeistCreateView.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView
    },
    {
      path: '/heists',
      name: 'heists',
      component: HeistView
    },
    {
      path: '/heists/create',
      name: 'createHeist',
      component: HeistCreateViewVue
    }
  ]
})

export default router
