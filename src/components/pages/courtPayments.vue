<template>
    <div>
    <the-headersider></the-headersider>
    <base-card>
    <h4>Payments for: 
        {{ courtName }}
      <!-- {{ clientName[0].name }} -->
      <i v-for="name in courtName" :key="name.id">
                    
                    
                    {{ name.name }}
                    
                </i>
                 </h4>
      
    <br>
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <!-- <th><h3>Client Id</h3></th> -->
                <th><h3>Name</h3></th>
                <th><h3>amount</h3></th>
                <th><h3>Payment date</h3></th>
                <th><h3>Payment type</h3></th>
                <th><h3>Reference</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="payment in courtpayments" :key="payment.id">
                    
                    <!-- <td>{{ payment.client_id}}</td> -->
                    <td>{{ payment.name }}</td>
                    <td>{{ payment.amount}}</td>
                    <td>{{ new Date(payment.date).toLocaleString('nl-NL') }}</td>
                    <td>{{ payment.type}}</td>
                    <td>{{ payment.reference}}</td>
                    
                </tr>
            </tbody>
    </table>
    
</base-card>

<router-link to="/receive/payment">Receive payment</router-link>
</div>
</template>
<script>



export default {
    computed: {
    
    court_id() {
      return this.$route.params.court
    },
     courtName() {
      return this.$store.getters.courtName(this.$route.params.court)
    },
    courtpayments (){
        return this.$store.getters.courtPaymentGetter(this.$route.params.court)
        

    },

   


  },
     created() {
    this.$store.dispatch('LoadPayments');  
    
    this.$store.dispatch('LoadClients');  
    
    
  
    
    
  },
  

}

</script>
