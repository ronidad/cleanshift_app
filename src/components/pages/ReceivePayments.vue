<template>
  <div>
<the-headersider></the-headersider>
<base-card>

  <h2>Receive payment</h2>
  <form @submit.prevent="createPayment">
   
    
    <div class="form-control">
    <div class="field">
        <label class="label">Client</label>
        <div class="select">
          <select v-model="formData.name">
            <option disabled value="">
              Select client
            </option>
             <option  v-for="client in clients" :key="client.id">
       {{ client.client_id  }}-{{client.name }}
    </option>
          </select>
        </div>
      </div>
      </div>
       <div class="form-control">
      <label for="amount"> Amount </label>
      <input type="text" id="amount" v-model="formData.amount" />
    </div>
    <div class="form-control">
    <div class="field">
        <label class="label">payment type</label>
        <div class="select">
          
          <select v-model="formData.type">
            
  <option>MPESA</option>
  <option>CASH</option>
  <option>CHEQUE</option>
</select>
        </div>
      </div>
      </div>

      <div class="form-control">
      <label for="amount"> Reference </label>
      <input type="text" id="ref" v-model="formData.reference" />
    </div>
     
     
    
    <base-button>Submit</base-button>
  </form>
  </base-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
    
    
 
  data() {
  
    return {
        user: '',
        
        formData: {
            clientId: '',
            amount: '',
            type: '',
            ref: ''

            
            
            
            

        },
        
     
      
    }
  },
  computed: {
        clients() {
            return  this.$store.getters.clients

            
        }

    },
     created() {
    this.$store.dispatch('LoadClients');  
    
    
  },
    //  mounted() {
    // let user = localStorage.getItem('user');
    // this.user = JSON.parse(user)

    // },
  methods: {
    async createPayment(){
      const response = await axios.post("https://api.roberms.com/receive/payment/", this.formData)
      console.log(response)
   
        this.$router.replace('/payments');
        console.log(this.formData)

    

    },
  },
  
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>



    


<script>


</script>