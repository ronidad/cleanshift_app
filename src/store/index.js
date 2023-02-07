import { createStore } from "vuex";

const store = createStore({
  state: {
    token: null,
    user: null,

    courts: [],
    clients: [],
    payments: [],
    clientpayment: [],
    clientpaymentz: [],
    clientPayments: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = null;
    },
    removeUser(state) {
      state.user = null;
    },
    setCourts(state, courts) {
      state.courts = courts;
    },
    setClients(state, clients) {
      state.clients = clients;
    },
    setPayments(state, payments) {
      state.payments = payments;
    },
    setClientpayments(state, clientPaymentz) {
      state.clientPaymentz = clientPaymentz;
    },

    setRevenues(state, revenues) {
      state.revenues = revenues;
    },
  },
  actions: {
    clearToken(context) {
      context.commit("removeToken");
    },
    clearUser(context) {
      context.commit("removeUser");
    },
    addToken(context) {
      context.commit("setToken");
    },

    async LoadCourts(context) {
      const url = `https://api.roberms.com/get/courts`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const courts = [];
      for (const key in responseData) {
        const court = {
          id: key,
          name: responseData[key].name,
          area: responseData[key].area,
          reg_date: responseData[key].reg_date,
        };
        courts.push(court);
      }
      context.commit("setCourts", courts);
    },
    async LoadClients(context) {
      const url = `https://api.roberms.com/get/clients`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const clients = [];
      for (const key in responseData) {
        const client = {
          id: key,
          client_id: responseData[key].id,
          name: responseData[key].client_name,
          phone: responseData[key].phone,
          court: responseData[key].court.courtName,
          reg_date: responseData[key].createdAt,
        };
        clients.push(client);
      }
      context.commit("setClients", clients);
    },

    async ClientPayments(context) {
      const url = `https://api.roberms.com/get/payments`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      const payments = [];
      for (const key in responseData) {
        const payment = {
          id: key,
          client_Id: responseData[key].client_id,

          payment_date: responseData[key].payment_date,
          amount: responseData[key].amount,
        };
        payments.push(payment);
      }
      context.commit("setClientpayments", payments);
    },
    async LoadPayments(context) {
      const url = `https://api.roberms.com/get/payments`;

      const response = await fetch(url, {
        mode: "cors",
        // credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": true,
        },
      });
      const responseData = await response.json();
      if (!response.ok) {
        //
      }
      console.log(responseData);
      const payments = [];
      for (const key in responseData) {
        const payment = {
          id: key,
          client_id: responseData[key].client_id,
          name: responseData[key].client.client_name,
          amount: responseData[key].amount,
          date: responseData[key].payment_date,
          type: responseData[key].type,
          reference: responseData[key].reference,
        };
        payments.push(payment);
      }
      context.commit("setPayments", payments);
    },
  },
  getters: {
    isLoggedIn() {
      return !!localStorage.getItem("token");
    },

    clients: (state) => state.clients,
    revenues: (state) => state.revenues,
    allCourts: (state) => state.courts,
    payments: (state) => state.payments,
    // ClientPayments: (state) => state.clientPayments,
    clientPaymentGetter: (state) => (client) =>
      state.clientpaymentz.filter((pay) => pay.client_id == client),
    PaymentGetter: (state) => (client) =>
      state.payments.filter((pay) => pay.client_id == client),
    clientName: (state) => (client) =>
      state.clients.filter((pay) => pay.client_id == client),

    // clientName: (state) => (client)=> state.clients.filter(pay=pay.client_id=client)
  },

  //
});
export default store;
