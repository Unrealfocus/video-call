import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import works from "../pages/works/works.vue";
import AboutUs from "../pages/about/aboutUs.vue";
import singup from "../pages/auth/signUp1.vue";
import ContactUs from "../pages/contact/contactUs.vue";
import Index from "../pages/dashboard/Index.vue";
import dashboardLayout from "../components/layout/dashboardLayout.vue";
import signin from "../pages/auth/login.vue";
import AccountSettings from "../pages/dashboard/accountSettings.vue";
import SecuritySettings from "../pages/dashboard/securitySettings.vue";
// import DonationsPage from "../pages/dashboard/donation.vue";
import Withdrawal from "../pages/dashboard/withdrawal.vue";
import ManagePage from "../pages/dashboard/manage.vue";
import TransactionPage from "../pages/dashboard/transaction.vue";
import HelpPage from "../pages/dashboard/help.vue";
import More from "../pages/dashboard/more.vue";
import Edit from "../pages/dashboard/edit.vue";

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
      path: "/edit",
      component: Edit,
    },
    {
      path: "/works",
      component: works,
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
      path: "/withdrawal/:id",
      component: Withdrawal,
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
          path: "security-settings",
          component: SecuritySettings,
        },
        {
          path: "",
          component: Index,
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
      path: "/create-bucket",
      component: CreateBucket,
    },
    {
      path: "/buckets",
      component: SeeBuckets,
    },
    {
      path: "/bucket/:id",
      component: SingleBucket,
    },
    {
      path: "/donate/:id",
      component: donate,
    },
  ],
});

export default router;
