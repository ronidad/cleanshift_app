<template>
    <the-headersider></the-headersider>
    <base-card>
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
                <tr v-for="payment in payments" :key="payment.id">
                    <!-- <td>{{ payment.client_id}}</td> -->
                    <td>{{ payment.name}}</td>
                    <td>{{ payment.amount}}</td>
                    <td>{{ new Date(payment.date).toLocaleString('nl-NL') }}</td>
                    <td>{{ payment.type}}</td>
                    <td>{{ payment.reference}}</td>
                    
                </tr>
            </tbody>
    </table>
    
</base-card>

<router-link to="/receive/payment">Receive payment</router-link>
</template>
<script>



export default {
    computed: {
        payments() {
            return  this.$store.getters.payments

            
        }

    },
     created() {
    this.$store.dispatch('LoadPayments');  
    
    
  },

}

</script>
