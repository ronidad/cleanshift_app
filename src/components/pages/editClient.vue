<template>
  <div>

      <the-headersider></the-headersider>
<div class="container"> 


  <div class="">
    <!-- <h2 class="text-2xl font-bold mb-4">Edit Client</h2> -->

    <form @submit.prevent="updateClient">
      <div class="mb-4">
        <label class="block font-medium">Client Name</label>
        <input v-model="form.client_name" type="text" class="input" />
      </div>

      <div class="mb-4">
        <label class="block font-medium">Phone</label>
        <input v-model="form.phone" type="text" class="input" />
      </div>

      <div class="mb-4">
        <label class="block font-medium">Billing Date</label>
        <input v-model="form.billing_date" type="date" class="input" />
      </div>

      <div class="mb-4">
        <label class="block font-medium">Monthly Payment</label>
        <input v-model.number="form.monthly_payment" type="number" class="input" />
      </div>

      <div class="mb-4">
        <label class="block font-medium">Arrears</label>
        <input v-model.number="form.arrears" type="number" class="input" />
      </div>

      <div class="mb-4">
        <label class="block font-medium">Is Active</label>
        <input type="checkbox" v-model="form.isActive" />
      </div>

      <button type="submit" class="btn">Update Client</button>
    </form>
  </div>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditClient",
  props: {
    clientId: Number // passed from parent or route
  },
  data() {
    return {
      form: {
        client_name: "",
        phone: "",
        billing_date: "",
        monthly_payment: 0,
        arrears: 0,
        isActive: false
      }
    };
  },
  mounted() {
    this.loadClient();
  },
  created() {
  // this.$store.dispatch('loadClient');  
  
  
},
computed: {
  
  // client_id() {
  //   return this.$route.params.id
  // },

 


},

  methods: {
    async loadClient() {
      try {
        const res = await axios.get(`https://api.roberms.com/client/${this.$route.params.clientId}`);
        const data = res.data;
        this.form = {
          client_name: data.client_name,
          phone: data.phone,
          billing_date: data.billing_date.slice(0, 10), // Format for input[type="date"]
          monthly_payment: data.monthly_payment,
          arrears: data.arrears,
          isActive: data.isActive
        };
        
      } catch (err) {
        console.error("Failed to load client:", err);
      }
    },
    async updateClient() {
      try {
        await axios.put(`https://api.roberms.com/edit/client/${this.$route.params.clientId}`, this.form);
        alert("Client updated successfully!");
        this.$router.replace('/clients');

        // Optionally redirect or reload
      } catch (err) {
        console.error("Update failed:", err);
      }
    }
  }
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.btn {
  background: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
}
</style>
