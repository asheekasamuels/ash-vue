<template>
     <div class="container contact">
        <div class="row">
      <h1 class="contact1">Contact Me</h1>
    </div>
    <div>
      <form action="https://formspree.io/f/mrgnjjvw" method="POST">
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
        
        <button type="submit" class="btn btn text-center">Submit</button>
        <button type="reset" class="btn btn text-center">Reset</button>
      </form>
    </div>
  </div>
  </template>