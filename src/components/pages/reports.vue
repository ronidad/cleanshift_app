<template>
  <div>
<the-headersider></the-headersider>
  
  <MDBCarousel
    v-model="carousel2"
    :items="items2"
    :controls="false"
    :indicators="false"
  />
</div>
</template>

<script>
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  export default {
    components: {
      MDBCarousel
    },
    setup() {
      const items2 = [
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
          alt: "..."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
          alt: "..."
        },
        {
          src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
          alt: "..."
        }
      ];
      const carousel2 = ref(0);
      return {
        items2,
        carousel2
      };
    }
  };
</script>