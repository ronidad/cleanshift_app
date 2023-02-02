import { createStore } from "vuex";

const store = createStore({
  state: {
    token: null,
    user: null,

    courts: [],
    clients: [],
    payments:[],
    clientpayment: [{
        id: 1,
        client_id: 1,
        name: 'Ronnie',
        payment_date: "29/6/2022",
        amount: 5000

    },
    {
      id: 2,
      client_id: 3,
      name: 'Ben',
      payment_date: "30/6/2022",
      amount: 5000

  },
  
  ],
  clientpaymentz: [{
    id: 1,
    client_id: 1,
    payment_date: "29/6/2022",
    amount: 5000

},
{
  id: 2,
  client_id: 3,
  payment_date: "30/6/2022",
  amount: 5000

},

],
    clientPayments: [{
      id: 1,
      client_id: 1,
      name: 'Ronnie',
      payment_date: "29/6/2022",
      amount: 5000

  },
],
    vehicleTrips: [
      {
        id: 1,
        vehicle: 'KDH242Z',
        trip: 'Nyamira',
        date: "29/6/2022",
        amount: 80000
      },
    ]
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
      const url = `http://localhost:5001/get/courts`;

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
      const url = `http://localhost:5001/get/clients`;

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
          name: responseData[key].name,
          phone: responseData[key].phone,
          court: responseData[key].court,
          reg_date: responseData[key].reg_date,
        };
        clients.push(client);
      }
      context.commit("setClients", clients);
    },

    async ClientPayments(context) {
      const url = `http://localhost:5001/get/payments`;

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
      const url = `http://localhost:5001/get/payments`;

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
      console.log(responseData)
      const payments = [];
      for (const key in responseData) {
        const payment = {
          id: key,
          client_id: responseData[key].client_id,
          name: responseData[key].name,
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
    clientPaymentGetter: (state) => (client)=>state.clientpaymentz.filter(pay=>pay.client_id==client),
    PaymentGetter: (state) => (client)=>state.payments.filter(pay=>pay.client_id==client),
    clientName: (state) => (client)=> state.clients.filter(pay=>pay.client_id==client),
    
    // clientName: (state) => (client)=> state.clients.filter(pay=pay.client_id=client)

  },


  //
});
export default store;
