<template>
    <div>
    <the-headersider></the-headersider>
    <base-card>
    <div class="form-outline">
  <input type="search" id="form1" class="form-control" v-model="search" placeholder="Search client"  aria-label="Search" />
</div>
</base-card>
    <base-card>
   
  
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Name</h3></th>
                <th><h3>phone</h3></th>
                <th><h3>court</h3></th>
                <th><h3>Arrears</h3></th>
            </tr>
            </thead> 
            <tbody>
                
                <tr v-for="client in filteredClients" :key="client.id">
                    <td><a :href="'/client/payments/' + client.client_id">{{client.name}}</a></td>
                    
                    <!-- <td>{{ client.name}}</td>  -->
                    <td>{{ client.phone}}</td>
                    <td>{{ client.court}}</td>
                    <td>{{ client.arrears}}</td>
                    
                </tr>
            </tbody>
    </table>
    
</base-card>
<router-link to="/register/clients">Register clients</router-link>
</div>
</template>
<script>



export default {
    data() {
    return {
      search: "",
    };
  },
    computed: {
        clients() {
            return  this.$store.getters.clients

            
        },
        id_client(){
            return this.client_id + 1

        },
        filteredClients() {
      return this.clients.filter((client)=>client.name.toLowerCase().includes(this.search.toLowerCase())|client.phone.toString().includes(this.search.toLowerCase())).slice(0,10)
        
       
    },

    },
     created() {
    this.$store.dispatch('LoadClients');  
    
    
  },

}

</script>
