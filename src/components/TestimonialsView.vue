<template>
  <section class="container testimonial">
    <div class="row">
      <div class="col-12">
        <h1 class="testimonials">Testimonials</h1>
        <div class="card-deck">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="card mb-3">
            <div class="card-body">
              <img :src="testimonial.image" class="card-img-top" alt="Testimonial image" width="auto" height="auto">
              <p class="card-text">{{ testimonial.quote }} - <span>{{ testimonial.author }}</span></p>
            </div>
          </div>
        </div>
        <Spinner v-if="loading" />
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      testimonials: [],
      loading: true 
    };
  },
  created() {
    
    setTimeout(() => {
      this.testimonials = [
        { id: 1, author: "Kyle Brink", quote: "I always feel grateful when working with Asheeka. She really gives her 100% and always motivates me when I am feeling overwhelmed with certain tasks. She is a great team leader and communicates well with others. I am always excited when working with her because I know that the final product will be exemplary. She is not just a great teammate but also an amazing friend", image: "https://asheekasamuels.github.io/All-Images/images/Kyle2.jpg" },
        { id: 2, author: "Aakifah Palekar", quote: "Asheeka is very hardworking and a creative individual. Asheeka has showed her skills when working with people and is very interactive.", image: "https://asheekasamuels.github.io/All-Images/images/Aakifah2.jpg" },
        { id: 3, author: "Masoodah George", quote: "I wholeheartedly recommend Asheeka Samuels for employment. Her exceptional communication skills and her straight-forwardness makes her a valuable addition to any team.", image: "https://asheekasamuels.github.io/All-Images/images/Masoodah2.jpg" },
        { id: 4, author: "Shakeel Davids", quote: "I had the pleasure of working with Asheeka and I must say, her dedication, professionalism, and expertise were truly impressive. She consistently went above and beyond to ensure the success of the project, and her innovative ideas and problem-solving skills were invaluable. I highly recommend Asheeka to anyone looking for a reliable and talented collaborator.", image: "https://asheekasamuels.github.io/All-Images/images/Shakeel1.jpg" },
        { id: 5, author: "Anushqa Kandan", quote: "Asheeka is an extremely dedicated worker who always strives to do the best she can. She remains willing to attain new knowledge and works very well in a team. Asheeka has the ability to create a comfortable atmosphere for those around her and always goes the extra mile when necessary.", image: "https://asheekasamuels.github.io/All-Images/images/Anushqa2.jpg" },
        { id: 6, author: "Caleb Okkers", quote: "Asheeka is a self motivated, hardworking individual who positively influences those around her. She is reliable and always willing to share her knowledge and skill to get everyone to her level of excellence. She was always an asset to the team and goes the extra mile to boost the morale with her peers. Asheeka is always friendly and maintains her professionalism with peers and clients.", image: "https://asheekasamuels.github.io/All-Images/images/Caleb3.jpg" }
      ];
      this.loading = false; 
    }, 2000); 
  }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>

