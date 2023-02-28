<template>
    <div>
    <the-headersider></the-headersider>
    <base-card>
    <div class="form-outline">
  <input type="search" id="form1" class="form-control" v-model="search" placeholder="Search client"  aria-label="Search"  />
</div>
</base-card>
    <base-card>
   
  
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <th>Phone</th>
                <th>Message</th>
                <th>Sent date</th>
                
            </tr>
            </thead> 
            <tbody>
                
                <tr v-for="message in filteredMessages" :key="message.id">
                    
                    <!-- <td>{{ client.name}}</td>  -->
                    <td>{{ message.dest_msisdn}}</td>
                    <td>{{ message.message}}</td>
                    <td>{{ message.sent_date}}</td>
                   
                    
                </tr>
            </tbody>
    </table>
    <div><router-link to="/messages">Back to messages</router-link></div>
</base-card>


<br>

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
        messages() {
            return  this.$store.getters.messagesGetter

            
        },
        
        filteredMessages() {
      return this.messages.filter((message)=>message.message.toLowerCase().includes(this.search.toLowerCase())| message.dest_msisdn.toString().includes(this.search.toLowerCase())).slice(0,15)
        
       
    },

    },
     created() {
    this.$store.dispatch('LoadMessages');  
    
    
  },
  methods: {
    

  },

}

</script>
