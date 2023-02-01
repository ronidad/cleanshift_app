<template>
  <div>

  <the-headersider></the-headersider>

  <section>
     
    
    
    <base-card>
    <!-- {{clientName[0]}} -->
    <h4>Payments for: 
      
      <i v-for="name in clientName" :key="name.id">
                    
                    
                    {{ name.name }}
                    
                </i>
                 </h4>
      
    <br>
   
    <table class="table table-striped table-bordered centre">
        <thead>
            <tr >
                
                <th><h3>Date</h3></th>
                <th><h3>Amount</h3></th>
                
            </tr>
            </thead> 
            <tbody>
                <tr v-for="payment in clientpayments" :key="payment.id">
                    <td>{{ new Date(payment.date).toLocaleString('nl-NL') }}</td>
                    
                    <td>{{ payment.amount }}</td>
                    
                </tr>
            </tbody>
    </table>
    <br>
  
  
    </base-card>
    


<button @click="downloadPDF">Download client payments</button>

  </section>
</div>  
</template>

<script>
// import axios from 'axios';

import jsPDF from "jspdf";
// import autotable from 'jspdf-autotable';
// import TheVehicle from "../../components/items/TheVehicle.vue"

export default {
    data(){
        return {
            revenues: null,
            deductions: null,
            currentClient: null
        }

    },
  
  computed: {
    
    client_id() {
      return this.$route.params.client
    },
     clientName() {
      return this.$store.getters.clientName(this.$route.params.client)
    },
    clientpayments (){
        return this.$store.getters.PaymentGetter(this.$route.params.client)

    },

   


  },
  created() {
      this.$store.dispatch('LoadPayments');   
      this.$store.dispatch('LoadClients'); 
      let currentClient = localStorage.getItem('user')
      this.currentClient = JSON.parse(currentClient)
      console.log(currentClient)
      
  
  //   const url = `http://localhost:5000/get/payments/` + this.client_id;
    
  //   axios.get(url).then(resp => {
    
  //   this.payments = resp.data;
  //   console.log(this.payments);
    
  // });

   
    
  },
  mounted(){
         
     },
    
  methods: {
    downloadPDF(){
        var pdf=new jsPDF();

      var colt = ["Date","Amount"];
       
       var rowst = [];
       

        this.clientpayments.forEach(payment => {      
        var temp = [new Date(payment.date).toLocaleString('nl-NL') ,payment.amount];
        rowst.push(temp);
         }); 
          
        // let item = [['Tea', 'suger','100',1000], ['Leaves', 'suger','200',1000]]
        const OctaImage = "data:image/png;base64,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"
        
//All texts here with cordinates 
        pdf.text('payment report for customer ' ,80,25);
        
        pdf.line(0,36,400,36);
        pdf.addImage(OctaImage,'PNG',0,0,50,35)
        
        // pdf.text("Revenues", {startY: 37})
        pdf.text('Payments ' ,10,41);
        pdf.autoTable(colt, rowst, { startY: 43 });

       
        // pdf.autoTable(cold, rowsd, { startY: 102 });
        
        // pdf.text(revenues,10,10)
        pdf.save(this.vehicleReg).pdf;
    },

  },
 

  

 
  
};
</script>

<style scoped>
  body {
  background: #fdfbfb;
  margin-left: 220px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

</style>



