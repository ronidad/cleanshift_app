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
                <th><h3>Registration Date</h3></th>
                
                <th><h3>Is Approved</h3></th>
            </tr>
            </thead> 
            <tbody>
                
                <tr v-for="client in filteredClients" :key="client.id">
                    <td><a :href="'/client/payments/' + client.client_id">{{client.name}}</a></td>
                    
                    <!-- <td>{{ client.name}}</td>  -->
                    <td>{{ client.phone}}</td>
                    <td>{{ client.court}}</td>
                    
                    <td>{{ client.arrears}}</td>
                    <td>{{ client.reg_date}}</td>
                    <td>{{ client.approved}}</td>
                    
                </tr>
            </tbody>
    </table>
    
</base-card>
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
        Requestingclients() {
            return  this.$store.getters.RequestingClients

            
        },
        
        filteredClients() {
      return this.Requestingclients.filter((client)=>client.name.toLowerCase().includes(this.search.toLowerCase())|client.phone.toString().includes(this.search.toLowerCase())).slice(0,6)
        
       
    },

    },
     created() {
    this.$store.dispatch('LoadWebClients');  
    
    
  },

}

</script>
