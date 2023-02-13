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
    MpesaPayments:[],
    requesting_clients: [],
    messages:[{
      "phone": ["0725029795", "0724648426"]
      
    },
    {
      "message":["Test 1", "Test 2"]
    },
    ],

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
    setMpesapayments(state,MpesaPayments){
      state.MpesaPayments = MpesaPayments
    },
    setRequestingClients(state,requesting_clients){
      state.requesting_clients=requesting_clients
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
          courtId: responseData[key].id,
          name: responseData[key].CourtName,
          area: responseData[key].area,
          reg_date: responseData[key].createdAt,
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
          court: responseData[key].court.CourtName,
          courtId: responseData[key].courtId,
          arrears: responseData[key].arrears,
          isActive: responseData[key].isActive,
          montlyPayment: responseData[key].monthly_payment,
          reg_date: responseData[key].createdAt,
        };
        clients.push(client);
      }
      context.commit("setClients", clients);
    },
    async LoadWebClients(context) {
      const url = `https://api.roberms.com/get/new/client`;

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
      const requesting_clients = [];
      for (const key in responseData) {
        const client = {
          id: key,
          client_id: responseData[key].id,
          name: responseData[key].client_name,
          phone: responseData[key].phone,
          court: responseData[key].court.CourtName,
          
          approved: responseData[key].Approved,
          reg_date: responseData[key].reg_date,
        };
        requesting_clients.push(client);
      }
      context.commit("setRequestingClients", requesting_clients);
    },

    // async ClientPayments(context) {
    //   const url = `https://api.roberms.com/get/payments`;

    //   const response = await fetch(url, {
    //     mode: "cors",
    //     // credentials: "include",
    //     headers: {
    //       "Access-Control-Allow-Origin": true,
    //     },
    //   });
    //   const responseData = await response.json();
    //   if (!response.ok) {
    //     //
    //   }
    //   const payments = [];
    //   for (const key in responseData) {
    //     const payment = {
    //       id: key,
    //       client_id: responseData[key].client_id,
    //       name: responseData[key].client.client_name,
    //       payment_date: responseData[key].payment_date,
    //       amount: responseData[key].amount,
    //     };
    //     payments.push(payment);
    //   }
    //   context.commit("setClientpayments", payments);
    // },
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
          client_id: responseData[key].client.id,
          name: responseData[key].client.client_name,
          court_id: responseData[key].client.courtId,
          court_name: responseData[key].client.CourtName,
          amount: responseData[key].amount,
          date: responseData[key].payment_date,
          type: responseData[key].payment_type,
          reference: responseData[key].payment_reference,
        };
        payments.push(payment);
      }
      context.commit("setPayments", payments);
    },
    async LoadMpesapayments(context) {
      const url = `https://api.roberms.com/get/mpesapayments`;

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
      const MpesaPayments = [];

      for (const key in responseData) {
        const payment = {
          id: key,
          
          name: responseData[key].name,
          phone: responseData[key].phone_number,
          amount: responseData[key].amount,
          payment_date: responseData[key].payment_date,
          account_number: responseData[key].account_number,
          reference: responseData[key].payment_reference,
          processed: responseData[key].processed,
        };
        MpesaPayments.push(payment);
      }
      context.commit("setMpesapayments", MpesaPayments);
    },
  },
  getters: {
    isLoggedIn() {
      return !!localStorage.getItem("token");
    },

    clients: (state) => state.clients,
    revenues: (state) => state.revenues,
    courts: (state) => state.courts,
    payments: (state) => state.payments,
    // ClientPayments: (state) => state.clientPayments,

    PaymentGetter: (state) => (client) =>
      state.payments.filter((pay) => pay.client_id == client),
    clientName: (state) => (client) =>
      state.clients.filter((pay) => pay.client_id == client),
    courtName: (state) => (court) =>
      state.courts.filter((name) => name.courtId == court),
    courtPaymentGetter: (state) => (court) =>
      state.payments.filter((pay) => pay.court_id == court),
    courtClientsGetter: (state) => (court) =>
      state.clients.filter((pay) => pay.courtId == court),
      MpesaPayments: (state)=> state.MpesaPayments,
      RequestingClients: (state)=>state.requesting_clients,
      messagesGetter: (state)=>state.messages
      

    // clientName: (state) => (client)=> state.clients.filter(pay=pay.client_id=client)
  },

  //
});
export default store;
