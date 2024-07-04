<template>
  <div class="container contact">
    <div class="row">
      <h1 class="contact1">Contact Me</h1>
    </div>
    <div>
      <form action="https://formspree.io/f/mrgnjjvw" method="POST" @submit.prevent="submitForm">
        <div class="mb-3">
          <label class="form-label">Your Full Name *</label>
          <input v-model="formData.name" type="text" class="form-control border-2" name="Name" placeholder="Your Full Name" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Valid Email Address *</label>
          <input v-model="formData.email" type="email" class="form-control border-2" name="Email" placeholder="Valid Email Address" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Mobile / Telephone Number *</label>
          <input v-model="formData.contact" type="tel" class="form-control border-2" name="Contact" placeholder="Mobile / Telephone Number" required />
        </div>

        <div class="mb-3">
          <label class="form-label">Message</label>
          <textarea v-model="formData.message" name="message" class="form-control border-2" rows="5" placeholder="Let us know how we can help and we'll get back to you soon!"></textarea>
        </div>

        <p class="p-2">* indicates a required field</p>

        <div class="mb-3">
          <button type="submit" class="btn btn-primary">Submit</button>
          <button type="reset" class="btn btn-secondary">Reset</button>
        </div>
      </form>
      <Spinner v-if="loading" />
    </div>
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  name: 'ContactComp',
  components: {
    Spinner
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        contact: '',
        message: ''
      },
      loading: false // Initial loading state
    };
  },
  methods: {
    submitForm() {
      // Perform form submission logic here
      // For demonstration purposes, let's simulate loading for 2 seconds
      this.loading = true;
      setTimeout(() => {
        // Reset form after submission
        this.formData = {
          name: '',
          email: '',
          contact: '',
          message: ''
        };
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
