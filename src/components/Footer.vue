<template>
    <footer class="container-fluid">
      <div class="row">
  
          <p class="footer lead d-flex justify-content-center">
              <span>Asheeka's Portfolio &copy; {{currentYear}}</span>        
          </p>
  
      </div>
    </footer>
  </template>
  
  <script>
  export default {
      name: "FooterComp",
      data() {
          return {
              currentYear: new Date().getUTCFullYear()
  
          }
      },
      mounted() {
  
      }
  }
  </script>
  
  <style>
  
  </style>