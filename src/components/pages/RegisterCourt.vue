<template>
  <div>
<the-headersider></the-headersider>
<base-card>

  <h2>Register court</h2>
  <form @submit.prevent="createCourt">
    <div class="form-control">
      <label for="CourtName"> name </label>
      <input type="text" id="CourtName" v-model="formData.CourtName" />
    </div>
    <div class="form-control">
      <label for="area">court area </label>
      <input type="text" id="area" v-model="formData.area" />
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
          CourtName: '',
            area: '',
            
            
            

        },
        
     
      
    }
  },
    //  mounted() {
    // let user = localStorage.getItem('user');
    // this.user = JSON.parse(user)

    // },
  methods: {
    async createCourt(){
      const response = await axios.post("https://api.roberms.com/court/registration/", this.formData)
      console.log(response)
   
        this.$router.replace('/courts');
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