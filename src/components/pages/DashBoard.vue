<template>
    <div>
<the-headersider></the-headersider>




   <table>
    <tr>
    <td><base-card>55 clients registered</base-card></td>
    <td><base-card>10 courts served</base-card></td>
    <td><base-card>10,000 Collected</base-card></td>
    <td><base-card>7 months in operation</base-card></td>
    </tr>
  

   </table>
   </div>
</template>
<script>

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