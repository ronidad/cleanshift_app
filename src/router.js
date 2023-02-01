// import { Router } from "express";
import { createRouter, createWebHistory } from "vue-router";

// import pages
import LoginUser from "./components/pages/LoginUser.vue";
import RegisterUser from "./components/pages/RegisterUser.vue";
import HomePage from "./components/pages/HomePage.vue";
import UserProfile from "./components/pages/UserProfile.vue";
import DashBoard from "./components/pages/DashBoard";
import TestHome from "./components/pages/TestHome";
import Clients from "./components/pages/clients";
import RegisterCourt from "./components/pages/RegisterCourt";
import RegisterClient from "./components/pages/RegisterClient";
import ReceivePayment from "./components/pages/ReceivePayments";
import Payments from "./components/pages/payments";

import Reports from "./components/pages/reports";
import Courts from "./components/pages/courts";
import ClientPayments from "./components/pages/ClientPayments";

import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginUser, meta: { auth: false } },
    { path: "/register", component: RegisterUser, meta: { auth: false } },
    { path: "/profile", component: UserProfile, meta: { auth: true } },
    { path: "/dashboard", component: DashBoard, meta: { auth: true }  },
    { path: "/apps", component: DashBoard, meta: { auth: true }  },
    { path: "/test", component: TestHome },
    { path: "/reports", component: Reports, meta: { auth: true }  },
    {
      path: "/register/clients",
      component: RegisterClient,
      meta: { auth: true }
    },
    { path: "/clients", component: Clients, meta: { auth: true } },
    { path: "/register/court", component: RegisterCourt, meta: { auth: true } },
    { path: "/courts", component: Courts, meta: { auth: true }  },
    {
      path: "/receive/payment",
      component: ReceivePayment,
      meta: { auth: true }
    },
    { path: "/payments", component: Payments, meta: { auth: true } },
    { path: "/client/payments/:client", component: ClientPayments, meta: { auth: true }  },
  ],
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLoggedIn )
  {
    next('login')

  } else  if ( !to.meta.auth && store.getters.isLoggedIn)
  {
    next('apps')

  }

  else next()
})
// router.beforeEach((to, from, next)=>{
//   if 
//   (
//     to.meta.auth
//     ){
//       next("/login")
//     }
   
// });

export default router;
