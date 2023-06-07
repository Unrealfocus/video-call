import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import AboutUs from '../pages/about/aboutUs.vue'
import singup1 from '../pages/auth/signUp1.vue'
import CreateBucket from '../pages/buckets/CreateBucket.vue'
import ContactUs from '../pages/contact/contactUs.vue'
import Index from '../pages/dashboard/Index.vue'
import Works from '../pages/works/works.vue'

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
      path: '/sign-up1',
      component: singup1,
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
    {
      path: '/how-it-works',
      component: Works,
    },
  ],
})

export default router
