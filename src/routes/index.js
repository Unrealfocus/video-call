import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import AboutUs from "../pages/about/aboutUs.vue";
import singup from "../pages/auth/signUp.vue";
import ContactUs from "../pages/contact/contactUs.vue";
import Index from "../pages/dashboard/Index.vue";
import dashboardLayout from "../components/layout/dashboardLayout.vue";
import signin from "../pages/auth/login.vue";
import AccountSettings from "../pages/dashboard/accountSettings.vue";
import DonationsPage from "../pages/dashboard/donation.vue";
import ManagePage from "../pages/dashboard/manage.vue";
import TransactionPage from "../pages/dashboard/transaction.vue";
import HelpPage from "../pages/dashboard/help.vue";
import Test from "../pages/dashboard/test.vue";

//all things buckets
import CreateBucket from "../pages/buckets/CreateBucket.vue";
import SeeBuckets from "../pages/buckets/SeeBuckets.vue";
import SingleBucket from "../pages/buckets/SingleBucket.vue";
import donate from "../pages/buckets/donate.vue";

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
      path: "/signUp",
      component: singup,
    },
    {
      path: "/create-bucket",
      component: CreateBucket,
    },

    {
      path: "/account-settings",
      component: AccountSettings,
    },

    {
      path: "/contact-us",
      component: ContactUs,
    },

    {
      path: "/dashboard",
      component: dashboardLayout,
      children: [
        {
          path: "account-settings",
          component: AccountSettings,
        },
        {
          path: "dashboard",
          component: Index,
        },
        {
          path: "donations",
          component: DonationsPage,
        },
        {
          path: "manage",

          component: ManagePage,
        },
        {
          path: "transactions",
          component: TransactionPage,
        },
        {
          path: "help",
          component: HelpPage,
        },
        {
          path: "more",
          component: More,
        },
      ],
    },
    {
      path: "/sign-in",
      component: signin,
    },

    {
      path: "/test",
      component: Test,
    },
    {
      path: "/create-bucket",
      component: CreateBucket,
    },
    {
      path: "/buckets",
      component: SeeBuckets,
    },
    {
      path: "/bucket",
      component: SingleBucket,
    },
    {
      path: "/donate",
      component: donate,
    },
  ],
});

export default router;
