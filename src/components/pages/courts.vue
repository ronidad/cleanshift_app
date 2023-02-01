<template >
    <the-headersider></the-headersider>
    <div v-if="isLoggedIn">
        
    
<table  class="table table-striped table-bordered">
        <thead>
            <tr >
                <th><h3>Name</h3></th>
                <th><h3>area</h3></th>
                <th><h3>Registration Date</h3></th>
            </tr>
            </thead> 
            <tbody>
                <tr v-for="court in courts" :key="court.id">
                    <td>{{ court.name}}</td>
                    <td>{{ court.area}}</td>
                    <td>{{new Date(court.reg_date).toLocaleString('nl-NL') }}</td>
                    
                </tr>
            </tbody>
    </table>
    <router-link to="/register/court">register new Court</router-link>
</div>
<div v-else>
    <h2>Kindly login to access this page</h2>

</div>

</template>
<script>



export default {
    computed: {
        courts() {
            return  this.$store.getters.allCourts
            

            
        },
        isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },

    },
     created() {
    this.$store.dispatch('LoadCourts');  
    
    
  },
 

}

</script>
