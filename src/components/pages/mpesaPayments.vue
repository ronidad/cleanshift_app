<template>
    <div>
    <the-headersider></the-headersider>
    <base-card>
<table class="table table-striped table-bordered">
        <thead>
            <tr >
                <!-- <th><h3>Client Id</h3></th> -->
                <th><h3>Name</h3></th>
                <th><h3>Payment phone</h3></th>
                <th><h3>amount</h3></th>
                <th><h3>Payment date</h3></th>
                
                <th><h3>Reference</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="payment in MpesaMayments" :key="payment.id">
                    
                    <!-- <td>{{ payment.client_id}}</td> -->
                    <td>{{ payment.name }}</td>
                    <td>{{ payment.phone}}</td>
                    <td>{{ payment.amount}}</td>
                    <td>{{ new Date(payment.payment_date).toLocaleString('nl-NL') }}</td>
                    <!-- <td>{{ new Date(payment.date).toLocaleString('nl-NL') }}</td> -->
                    
                    <td>{{ payment.reference}}</td>
                    
                </tr>
            </tbody>
    </table>
    
</base-card>

</div>
</template>
<script>



export default {
    computed: {
        MpesaMayments() {
            return  this.$store.getters.MpesaPayments

            
        }

    },
     created() {
    this.$store.dispatch('LoadMpesapayments');  
    
    
  },

}

</script>
