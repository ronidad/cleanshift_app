<template>
    <div>
<the-headersider></the-headersider>





   <table>
    <tr>
    <td><base-card> <strong>{{ clients.length }}</strong> clients registered</base-card></td>
    <td><base-card> <strong>{{ courts.length }}</strong> courts served</base-card></td>
    <td><base-card> <strong>{{ total_collected }} </strong>Kshs Collected</base-card></td>
    <td><base-card> <strong>{{ total_arrears }} </strong>arrears to be collected </base-card></td>
    <td><base-card> <strong>{{ monthly_collections }}</strong>  Montly collections </base-card></td>
    </tr>
  

   </table>
   </div>
</template>
<script>
export default {
    methods: {
        total_amount (payments) {
  return payments.reduce((acc, ele) => {
    return acc + parseInt(ele.amount);
  }, 0);
}

    },
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

        clients() {
            return  this.$store.getters.clients

            
        },
        payments() {
            return  this.$store.getters.payments

            
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