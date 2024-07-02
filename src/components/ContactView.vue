<template>
  <div class="card m-2 p-3 contact">
     <form action="https://formspree.io/f/mrgnjjvw" method="POST">
     <h1 class="card p-3 text-center heading-text">Let's Chat!</h1>
     <div class="mb-3">
         <label class="form-label"></label>
         <input type="text" class="form-control border-2" name="Name" placeholder="Your Full Name" required />
     </div>
     
     <div class="mb-3">
         <label class="form-label"></label>
         <input type="email" class="form-control border-2" name="Email" placeholder="Valid Email Address" required />
     </div>
     
     <div class="mb-3">
         <label class="form-label"></label>
         <input type="tel" class="form-control border-2" name="Contact" placeholder="Mobile / Telephone Number" required/>
     </div>
     
     <div class="mb-3">
         <label class="form-label"></label>
         <textarea name="message" class="form-control border-2" rows="5" placeholder="Let us know how we can help and we'll get back to you soon!"></textarea>
     </div>

     <p class="p-2">* indicates a required field</p>
     
     <button type="submit" class="btn btn-outline-danger text-center">Submit</button>
     <button type="reset" class="btn btn-outline-danger text-center">Reset</button>
 </form>
</div>
</template>