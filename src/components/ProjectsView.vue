<template>
  <div class="container" id="projects">
    <div class="row">
      <h1>Projects</h1>
    </div>

    <div class="card-deck" v-if="projects">
      <div v-for="project in projects" :key="project.id" class="card mb-3">
        <img :src="project.image" class="card-img-top" :alt="`Image for ${project.title}`">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.description }}</p>
          <p class="card-text">Technologies: {{ project.technologies.join(', ') }}</p>
          <div class="btn-group" role="group" aria-label="Project Links">
            <a :href="project.gitHub" class="btn btn-outline-primary" target="_blank"><i class="bi bi-github"></i> GitHub</a>
            <a :href="project.netlify" class="btn btn-outline-primary" target="_blank"><i class="bi bi-cursor-fill"></i> Hosted</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return [
        {
          id: 1,
          title: "JS Calculator",
          description: "Developed a calculator",
          technologies: ["HTML", "CSS", "JavaScript"],
          gitHub: "https://github.com/your-account/js-calculator",
          netlify: "https://your-netlify-url/js-calculator",
          image: "https://path-to-your-image/js-calculator.jpg"
        },
        {
          id: 2,
          title: "Bootstrap Portfolio",
          description: "Developed a portfolio displaying my information",
          technologies: ["HTML", "CSS", "Bootstrap"],
          gitHub: "https://github.com/your-account/bootstrap-portfolio",
          netlify: "https://your-netlify-url/bootstrap-portfolio",
          image: "https://path-to-your-image/bootstrap-portfolio.jpg"
        },
        {
          id: 3,
          title: "To Do List",
          description: "Developed a to do list",
          technologies: ["HTML", "CSS", "JavaScript"],
          gitHub: "https://github.com/your-account/to-do-list",
          netlify: "https://your-netlify-url/to-do-list",
          image: "https://path-to-your-image/to-do-list.jpg"
        },
        {
          id: 4,
          title: "JS Ecommerce Website",
          description: "Developed a store website with functionality",
          technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
          gitHub: "https://github.com/your-account/ecommerce-website",
          netlify: "https://your-netlify-url/ecommerce-website",
          image: "https://path-to-your-image/ecommerce-website.jpg"
        }
      ];
    }
  }
};
</script>
