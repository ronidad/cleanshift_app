<template>
    <div>
  <!-- <the-headersider></the-headersider> -->
  <base-card>
  
    <h2>Update client details and save</h2>
    <form @submit.prevent="editClient">
        <div class="form-control">
        <label for="name"> Client Id </label>
        <input :disabled="true" class="form-control" type="text" id="client_name" v-model="formData.id" />
      </div>
      <div class="form-control">
        <label for="name"> name </label>
        <input  class="form-control" type="text" id="client_name" v-model="formData.client_name" />
      </div>
      <div class="form-control"> 
        <label for="phone">phone </label>
        <input  class="form-control" type="text" id="phone" v-model="formData.phone"/>
      </div>
      <div class="form-control"> 
        <label for="phone">Montly Bill </label>
        <input  class="form-control" type="text" id="phone" v-model="formData.amount" />
      </div>
      <div class="form-control">
      <div class="field">
          <label class="label">court</label>
          <div class="select">
            
            <select v-model="formData.court" >
              
               
               <option selected="Client"  v-for="court in courts" :key="court.id">
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
  
       
      
      <base-button>Update</base-button>
      <br>
      <br>
      <router-link to="/">Go back Home</router-link>
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
            id:1022,
            client_name: 'Ronald',
            phone: '0725029795',
            court:'1 twiga',
            amount: '500'
              
              
              
  
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
      async editClient(){
        const response = await axios.post("https://api.roberms.com/update/client/:client", this.formData)
        console.log(response)
     
          this.$router.replace('/');
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