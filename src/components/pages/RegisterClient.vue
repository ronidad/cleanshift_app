<template>
  <div>
<the-headersider></the-headersider>
<base-card>

  <h2>Register client</h2>
  <form @submit.prevent="createClient">
    <div class="form-control">
      <label for="name"> name </label>
      <input  class="form-control" type="text" id="name" v-model="formData.name" />
    </div>
    <div class="form-control"> 
      <label for="id_number">phone </label>
      <input  class="form-control" type="text" id="id_number" v-model="formData.phone" />
    </div>
    <div class="form-control">
    <div class="field">
        <label class="label">court</label>
        <div class="select">
          <select v-model="formData.court">
            <option disabled value="">
              Select a court
            </option>
             <option  v-for="court in courts" :key="court.id">
       {{ court.name }}
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
            name: '',
            phone: '',
            court:'',
            
            
            

        },
        
     
      
    }
  },
  computed: {
        courts() {
            return  this.$store.getters.allCourts

            
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