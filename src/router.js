// import { Router } from "express";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";

// import pages
import LoginUser from "./components/pages/LoginUser.vue";
import RegisterUser from "./components/pages/RegisterUser.vue";
import HomePage from "./components/pages/HomePage.vue";
import UserProfile from "./components/pages/UserProfile.vue";
import DashBoard from "./components/pages/DashBoard";
import Clients from "./components/pages/clients";
import RegisterCourt from "./components/pages/RegisterCourt";
import RegisterClient from "./components/pages/RegisterClient";
import OutsideClient from "./components/pages/newClients";
import ReceivePayment from "./components/pages/ReceivePayments";
import Payments from "./components/pages/payments";
import MpesaPayments from "./components/pages/mpesaPayments";

import Reports from "./components/pages/reports";
import Courts from "./components/pages/courts";
import ClientPayments from "./components/pages/ClientPayments";
import courtPayments from "./components/pages/courtPayments";
import courtClients from "./components/pages/courtClients";
import RequestingClients from "./components/pages/requestingClients";
import SendMessages from "./components/pages/sendMessages";
// import store from './store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginUser, meta: { auth: false } },
    { path: "/register", component: RegisterUser, meta: { auth: false } },
    { path: "/profile", component: UserProfile, },
    { path: "/dashboard", component: DashBoard, meta: { auth: true }  },
    { path: "/apps", component: DashBoard, meta: { auth: true }  },
    
    { path: "/reports", component: Reports, meta: { auth: true }  },
    {
      path: "/register/clients",
      component: RegisterClient,
      meta: { auth: true }
    },
    { path: "/clients", component: Clients, meta: { auth: true } },
    { path: "/register/court", component: RegisterCourt, meta: { auth: true } },
    {path: "/new/client/registration", component: OutsideClient, meta: { auth: true } },
    { path: "/courts", component: Courts, meta: { auth: true }  },
    { path: "/requesting/clients", component: RequestingClients, meta: { auth: true }  },
    { path: "/send/sms", component: SendMessages, meta: { auth: true }  },
    {
      path: "/receive/payment",
      component: ReceivePayment,
      meta: { auth: true }
    },
    { path: "/payments", component: Payments, meta: { auth: true } },
    { path: "/mpesa/payments", component: MpesaPayments, meta: { auth: true } },
    { path: "/client/payments/:client", component: ClientPayments, meta: { auth: true }  },
    { path: "/court/payments/:court", component: courtPayments, meta: { auth: true }  },
    { path: "/court/clients/:court", component: courtClients, meta: { auth: true }  },

  ],
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLoggedIn) {
      next({ path: '/Login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router;
