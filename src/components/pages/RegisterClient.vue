<template>
  <div>
<the-headersider></the-headersider>
<base-card>

 <strong> Register client</strong>
  <form @submit.prevent="createClient">
    <div >
      <label for="name"> name </label>
      <input  class="form-control" type="text" id="client_name" v-model="formData.client_name" />
    </div>
    <div> 
      <label for="phone">phone </label>
      <input  class="form-control" type="text" id="phone" v-model="formData.phone" v-model.trim="phone" />
    </div>
    
    <div> 
      <label for="monthly_payment">Monthly bill </label>
      <input  class="form-control" type="text" id="monthly_payment" v-model="formData.monthly_payment" />
    </div>
    <div > 
      <label for="starting_bill">Starting bill </label>
      <input  class="form-control" type="text" id="starting_bill" v-model="formData.starting_bill" />
    </div>
    <div >
    <div class="field">
        <label class="label">court</label>
        <div class="select">
          <select v-model="formData.court">
            <option disabled value="">
              Select a court
            </option>
          
             <option  v-for="court in courts" :key="court.id">
       {{ court.courtId }} {{ court.name }}
    </option>
          </select>
        </div>
      </div>
      </div>
     
    <!-- <div class="form-control">
      <label for="registered_by"> reg by</label>
      <input type="text"  id="registered_by" v-model="formData.registered_by" />
    </div> -->

     
    
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
          client_name: '',
          phone: '',
          monthly_bill:'',
          starting_bill: '',
          court:'',
            
            
            

        },
        
     
      
    }
  },
  computed: {
        courts() {
            return  this.$store.getters.courts

            
        }

    },
     created() {
    this.$store.dispatch('LoadCourts');  
    
    
  },
    //  mounted() {
    // let user = localStorage.getItem('user');
    // this.user = JSON.parse(user)

    // },
  methods: {
    async createClient(){
      const response = await axios.post("https://api.roberms.com/client/registration/", this.formData)
      console.log(response)
   
        this.$router.replace('/clients');
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