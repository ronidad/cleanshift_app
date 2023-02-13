<template>
    <div>
  <the-headersider></the-headersider>
  <section v-if="!isLoggedIn">
    <p>Kindly login to access this page</p>
   
</section>
    <section v-else>
      <!-- <base-card>
    <div class="form-outline">
  <input type="search" id="form1" class="form-control" v-model="search" placeholder="Search court"  aria-label="Search" />
</div>
</base-card> -->
        <base-card>


    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th><h3>Name</h3></th>
          <th><h3>area</h3></th>
          <!-- <th><h3>Registration Date</h3></th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="court in courts" :key="court.id">
          <!-- <td>{{ court.name }}</td> -->
          <td><a :href="'/court/clients/' + court.courtId">{{court.name}}</a></td>
          <td>{{ court.area }}</td>
          <!-- <td>{{ new Date(court.reg_date).toLocaleString("nl-NL") }}</td> -->
        </tr>
      </tbody>
    </table>
  </base-card>
    <router-link to="/register/court">register new Court</router-link>
</section>

  </div>
</template>
<script>
export default {
  computed: {
    courts() {
      return this.$store.getters.courts;
    },
    filteredCourts() {
      return this.courts.filter((court)=>court.name.toLowerCase().includes(this.search.toLowerCase())).slice(0,6)
        
       
    },

    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    this.$store.dispatch("LoadCourts");
  },
};
</script>
