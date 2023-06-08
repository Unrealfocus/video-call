import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import AboutUs from "../pages/about/aboutUs.vue";
import singup from "../pages/auth/signUp.vue";
import ContactUs from "../pages/contact/contactUs.vue";
//user dashboard etc...
import Index from "../pages/dashboard/Index.vue";
//all things buckets
import CreateBucket from "../pages/buckets/CreateBucket.vue";
import SeeBuckets from "../pages/buckets/SeeBuckets.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about-us",
      component: AboutUs,
    },
    {
      path: "/sign-up",
      component: singup,
    },

    {
      path: "/contact-us",
      component: ContactUs,
    },

    {
      path: "/dashboard",
      component: Index,
    },
    {
      path: "/create-bucket",
      component: CreateBucket,
    },
    {
      path: "/buckets",
      component: SeeBuckets,
    },
  ],
});

export default router;
