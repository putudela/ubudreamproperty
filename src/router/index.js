import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Buy from '../views/Buy.vue'
import BuyDetail from '../views/BuyDetail.vue'
import Rent from '../views/Rent.vue'
import RentDetail from '../views/RentDetail.vue'
import Contact from '../views/Contact.vue'
import Videos from '../views/Videos.vue'

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
    path: '/buy/detail/:id',
    name: 'buy-detail',
    component: BuyDetail
  },
  {
    path: '/rent',
    name: 'Rent',
    component: Rent
  },
  {
    path: '/rent/detail/:id',
    name: 'rent-detail',
    component: RentDetail
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
