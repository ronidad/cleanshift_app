<template>
    <div>
  <the-headersider></the-headersider>
  <base-card>
  <div class="row">
           <div class="col-lg-6">
           <div class="bs-component">
           <div class="card" style="-webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 10%); box-shadow: 0 1px 2px rgb(0 0 0 / 10%);">
               <div class="card-header">
                   <h5 class="mb-3" id="buttons">Send simple Message</h5>
                  
               </div>
               <div class="card-body">
                <small>Enter numbers separated by new lines</small> 
                <br>
                <!-- <base-button to="/send/simple/sms">Continue</base-button> -->
                   <a class="btn btn-primary" href="/send/simple/sms">Continue</a>
               </div>
           </div>
           </div>
       </div>
<!-- 
       <div class="col-lg-4">
           <div class="card" style="-webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 10%); box-shadow: 0 1px 2px rgb(0 0 0 / 10%);">
               <div class="bs-component">
                   <div class="card-header">
                   <h5 class="mb-3" id="buttons">Personalized Messages</h5>
                   </div>
               <div class="card-body">
                   <p></p>
                   <a class="btn btn-primary" href="/personalized/sms/menu">Continue</a>
               </div>
               </div>
           </div>
       </div> -->

       <div class="col-lg-6">
           <div class="card" style="-webkit-box-shadow: 0 1px 2px rgb(0 0 0 / 10%); box-shadow: 0 1px 2px rgb(0 0 0 / 10%);">
               <div class="bs-component">
                   <div class="card-header">
                   <h5 class="mb-3" id="buttons">View sent messages</h5>
                   
                   </div>
               <div class="card-body">
                <small>View and search sent messages</small> 
                <br>
                   <a class="btn btn-primary" href="/sms/report">Continue</a>
               </div>
               </div>
           </div>
       </div>
    </div>
  
 
  
   
    </base-card>
  </div>
  </template>
  
  <script>
  
  </script>
  
  <style scoped>
  .form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input[type="checkbox"] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }
  
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }
  
  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }
  
  input[type="checkbox"] {
    display: inline;
    width: auto;
    border: none;
  }
  
  input[type="checkbox"]:focus {
    outline: #3d008d solid 1px;
  }
  
  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  
  .invalid label {
    color: red;
  }
  
  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }
  </style>
  
  
  
      
  
  
  <script>
  
  
  </script>