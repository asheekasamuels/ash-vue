<template>
  <div class="container projects">
    <div class="row">
      <div class="col">
        <h1>Projects</h1>
      </div>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      <div class="col mb-4  d-flex justify-content-center" v-for="project in projects" :key="project.id">
        <div class="card h-100">
          <img :src="project.image" :alt="`Image for ${project.title}`" class="card-img-top" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <p class="card-text">Technologies: {{ project.technologies.join(', ') }}</p>
            <div class="buttons">
              <a :href="project.gitHub" class="pro-link" target="_blank"><i class="bi bi-github"></i> GitHub</a>
              <a :href="project.vercel" class="pro-link" target="_blank"><i class="bi bi-cursor-fill"></i> Hosted</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-if="loading" />
  </div>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      projects: [], 
      loading: true 
    };
  },
  created() {
   
    setTimeout(() => {
      this.projects = [
        {
          id: 1,
          title: "JS Calculator",
          description: "Developed a calculator",
          technologies: ["HTML", "CSS", "JavaScript"],
          gitHub: "https://github.com/asheekasamuels/jsCalculator.git",
          vercel: "https://js-calculator-iota-five.vercel.app/",
          image: "https://asheekasamuels.github.io/All-Images/images/js cal.png"
        },
        {
          id: 2,
          title: "Bootstrap Portfolio",
          description: "Developed a portfolio displaying my information",
          technologies: ["HTML", "CSS", "Bootstrap"],
          gitHub: "https://github.com/asheekasamuels/asheekasPortfolio.git",
          vercel: "https://asheekas-portfolio.vercel.app/",
          image: "https://asheekasamuels.github.io/All-Images/images/bootstrap.png"
        },
        {
          id: 3,
          title: "To Do List",
          description: "Developed a to do list",
          technologies: ["HTML", "CSS", "JavaScript"],
          gitHub: "https://github.com/asheekasamuels/toDoApp.git",
          vercel: "https://to-do-app-gray-three.vercel.app/",
          image: "https://asheekasamuels.github.io/All-Images/images/to do list.png"
        },
        {
          id: 4,
          title: "JS Ecommerce Website",
          description: "Developed a store website with functionality",
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          gitHub: "https://github.com/asheekasamuels/Candytopia.git",
          vercel: "https://candytopia-g5l9.vercel.app/",
          image: "https://asheekasamuels.github.io/All-Images/images/js pro.png"
        },
        {
          id: 5,
          title: "BMI Calculator",
          description: "Developed a bmi calculator",
          technologies: ["HTML", "CSS", "JavaScript"],
          gitHub: "https://github.com/asheekasamuels/BMI-calculator.git",
          vercel: "https://bmi-calculator-lilac-theta.vercel.app/",
          image: "https://asheekasamuels.github.io/All-Images/images/bmi.png"
        },
        {
          id: 6,
          title: " Temp Converter",
          description: "Developed a temp converter",
          technologies: ["HTML", "CSS", "JavaScript"],
          gitHub: "https://github.com/asheekasamuels/tempConvertor.git",
          vercel: "https://temp-convertor-alpha.vercel.app/",
          image: "https://asheekasamuels.github.io/All-Images/images/temp.png"
        },
      ];
      this.loading = false; 
    }, 2000); 
  }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
