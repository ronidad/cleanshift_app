<template>
  <div>
  
<base-card>

  <h2>Login</h2>
  <form @submit.prevent="loginUser">
    
    <div  >
      <label for="email">Email </label>
      <input class="form-control" type="text" id="email" v-model="formData.email" />
    </div>
     <div>
      <label for="password">Password </label>
      <input class="form-control" type="password" id="password" v-model="formData.password" />
    </div>
     
    
    <base-button>Login</base-button>
    <muted> <router-link to="/">Home page</router-link> </muted>
  </form>
  </base-card>
</div>
</template>

<script>
import axios from 'axios'
export default {
    
 
  data() {
    return {
        formData: {
            email: '',
            password: '',
            

        },
      
    }
  },
  methods: {
    async loginUser(){
      const response = await axios.post("https://api.roberms.com/login", this.formData)
       
      let user = response.data.user
      console.log(user)
      
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem('token', response.data.token)
      // this.$store.dispatch('addToken', response.data.token)
      // console.log(localStorage.user) 

      this.$router.push('/apps')
      // const user = await localStorage.getItem(user)
      // console.log(user)
      
        // axios.post("http://localhost:5000/login", this.formData)
        // .then(response=>console.log(response))
        // .catch(error=>console.log(error))
        // this.$router.replace('/log');

    

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