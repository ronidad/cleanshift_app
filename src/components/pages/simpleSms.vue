<template>
    <div>
      <the-headersider></the-headersider>
      <base-card>
        <!-- <h2>Send message</h2>
  
        {{ messages[0].phone }}
        <br />
        
        {{ messages[1].message }} -->
        <form @submit.prevent="sendSms">
          <div class="form-control">
             
            <label for="phone"> Phone numbers </label>
            <textarea
              rows="3"
              class="form-control"
              v-model="formData.dest_msisdn"
              id="dest_msisdn"
              placeholder="paste your numbers here"
            ></textarea>
            <!-- <input type="textarea" id="textarea" v-model="formData.message" /> -->
        
          </div>
          <div class="form-control">
            <label for="message"> message </label>
            <textarea
              rows="3"
              class="form-control"
              v-model="formData.message"
              id="message"
              placeholder="Enter message here"
            ></textarea>
            <!-- <input type="textarea" id="textarea" v-model="formData.message" /> -->
          </div>
  
          <base-button>Submit</base-button>
        </form>
      </base-card>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        user: "",
  
        formData: {
          dest_msisdn: "",
          message: "",
        },
      };
    },
    // computed: {
    //   phones() {
    //     return this.$store.getters.clients;
    //   },
    //   courts() {
    //     return this.$store.getters.courts;
    //   },
    //   messages() {
    //     return this.$store.getters.messagesGetter;
    //   },
    // },
    created() {
      // this.$store.dispatch("LoadCourts");
    },
    //  mounted() {
    // let user = localStorage.getItem('user');
    // this.user = JSON.parse(user)
  
    // },
    methods: {
      async sendSms() {
        const response = await axios.post(
          "https://api.roberms.com/send/sms/",
          this.formData
        );
        
        console.log(response);
        console.log(this.formData)
  
        this.$router.replace("/clients");
        console.log(this.formData);
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
  
  <script></script>
  