<template>
  <div class="container" id="projects">
    <div class="row">
      <h1>Skills</h1>
    </div>

    <div class="card-deck" v-if="projects">
      <div v-for="skill in projects" :key="skill.id" class="card mb-3" style="width: 18rem;">
        <img :src="skill.image" class="card-img-top" :alt="`Image for ${skill.title}`">
        <div class="card-body">
          <h5 class="card-title">{{ skill.title }}</h5>
          <p class="card-text">{{ skill.type }}</p>
          <p v-if="skill.description" class="card-text">{{ skill.description }}</p>
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
          image: "https://iili.io/J7mBwhl.png",
          title: "HTML 5",
          type: "technical skill",
          experience: "Advanced"
        },
        {
          id: 2,
          image: "https://iili.io/J7mBiQV.png",
          title: "CSS",
          type: "technical skill",
          experience: "Advanced"
        },
        {
          id: 3,
          image: "https://iili.io/J7mC9Tv.png",
          title: "Vue 3",
          type: "technical skill",
          experience: "Advanced"
        },
        {
          id: 4,
          image: "https://iili.io/J7mCJQp.png",
          title: "JavaScript",
          type: "technical skill",
          experience: "Advanced"
        },
        {
          id: 5,
          image: "https://iili.io/JN1W6Bf.png",
          title: "Attention to Detail",
          type: "soft skill",
          description: "Ability to be thorough and accurate in your work."
        },
        {
          id: 6,
          image: "https://iili.io/JN1kMiX.png",
          title: "Creativity",
          type: "soft skill",
          description: "A broad term that involves skills from questioning to experimenting."
        },
        {
          id: 7,
          image: "https://iili.io/JN1kwJf.png",
          title: "Time Management",
          type: "soft skill",
          description: "Using time wisely to work as efficiently as possible."
        },
        {
          id: 8,
          image: "https://iili.io/JN1ksOQ.png",
          title: "Adaptibility",
          type: "soft skill",
          description: "My ability to embrace change and adjust to it with ease."
        },
        {
          id: 9,
          image: "https://iili.io/JN1kHtS.png",
          title: "Communication",
          type: "soft skill",
          description: "The ability to convey or share ideas and feelings effectively."
        },
        {
          id: 10,
          image: "https://iili.io/JN1kuiF.png",
          title: "Interpersonal Skills",
          type: "soft skill",
          description: "Ability to interact and make a positive impression on others."
        }
      ];
    }
  }
};
</script>