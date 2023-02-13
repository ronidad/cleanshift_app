<template>
    <div>
        
<the-headersider></the-headersider>

<div class="row mx-md-n5">
    
  <div class="col px-md-2"><div class="p-3 border bg-light"><strong>{{ clients.length }} </strong>  Clients registsred</div></div>
  <div class="col px-md-2"><div class="p-3 border bg-light"> <strong>{{ courts.length }} </strong> Courts currently Served in all areas to</div></div>
  <div class="col px-md-2"><div class="p-3 border bg-light"><strong>{{ total_collected }} </strong> Kshs collected and allocated</div></div>
  <div class="col px-md-2"><div class="p-3 border bg-light"><strong>{{ unAllocatedMpesa }} </strong> Mpesa Collected unallocated</div></div>
  <div class="col px-md-2"><div class="p-3 border bg-light"><strong>{{ total_arrears }} </strong> Arrears to be collected</div></div>
  <div class="col px-md-2"><div class="p-3 border bg-light"><strong>{{ monthly_collections }} </strong> Monthly collections</div></div>
</div>

 
   </div>
</template>
<script>
export default {

    computed: {
        total_collected() {
            return this.payments.reduce((total, item)=>{
                return total + item.amount;
            },0)

        },
        total_arrears() {
            return this.clients.reduce((total, item)=>{
                return total + item.arrears;
            },0)

        },
        monthly_collections() {
            return this.clients.reduce((total, item)=>{
                return total + item.montlyPayment;
            },0)

        },
        unAllocatedMpesa() {
            return this.unallocatedPayments.reduce((total, item)=>{
                return total + Math.round(item.amount);
            },0)

        },


        clients() {
            return  this.$store.getters.clients

            
        },
        payments() {
            return  this.$store.getters.payments

            
        },
        unallocatedPayments(){
            return this.$store.getters.unAllocatedMpesaPayments()

        },
        courts() {
            return  this.$store.getters.courts

            
        },
        id_client(){
            return this.client_id + 1

        }

    },
     created() {
    this.$store.dispatch('LoadClients');  
    this.$store.dispatch('LoadCourts');  
    this.$store.dispatch('LoadPayments');
    this.$store.dispatch('LoadMpesapayments');
    
    
    
    
  },

}
</script>

<style scoped>

.dashboard {
    background-color:azure;
    box-sizing: border-box;
    padding: 3px;
    display: grid;
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr 2fr 4fr;
    grid-gap: 0ch;
    height: 100vh;
    
    grid-template-areas: 
    /* "theader theader theader" */
    "sidebar sheader sheader"
    "sidebar smain smain"

    ;
    


}
.sidebar {
    grid-area: sidebar;
    background-color:rgb(113, 180, 47);

}
.sheader {
    grid-area: sheader;
    background-color: rgb(221, 216, 209);
}
.smain {
    grid-area: main;
    background-color:beige;
}
.theader {
    grid-area: theader;
    grid-area: theader;
}

</style>