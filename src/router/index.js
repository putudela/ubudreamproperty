import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Buy from '../views/Buy.vue'
import BuyDetail from '../views/BuyDetail.vue'
import Rent from '../views/Rent.vue'
import RentDetail from '../views/RentDetail.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buy',
    name: 'Buy',
    component: Buy
  },
  {
    path: '/buy/detail',
    name: 'buy-detail',
    component: BuyDetail
  },
  {
    path: '/rent',
    name: 'Rent',
    component: Rent
  },
  {
    path: '/rent/detail',
    name: 'rent-detail',
    component: RentDetail
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
