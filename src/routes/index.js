import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import AboutUs from '../pages/about/aboutUs.vue'
import singup from '../pages/auth/signUp.vue'
import CreateBucket from '../pages/buckets/CreateBucket.vue'
import ContactUs from '../pages/contact/contactUs.vue'
import Index from '../pages/dashboard/Index.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about-us',
      component: AboutUs,
    },
    {
      path: '/signUp',
      component: singup,
    },
    {
      path: '/create-bucket',
      component: CreateBucket,
    },
    {
      path: '/contact-us',
      component: ContactUs,
    },

    {
      path: '/dashboard',
      component: Index,
    },
  ],
})

export default router
