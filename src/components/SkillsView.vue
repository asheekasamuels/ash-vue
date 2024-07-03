<template>
  <section class="container skills" id="skills">
    <div class="container">
      <div class="row">
        <h1 class="skills2" id="skills2">Skills</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="row">
          <div v-for="skill in skills" :key="skill.id" class="col-md-4 mb-4">
            <div class="card h-100">
              <img :src="skill.image" class="card-img-top" alt="Skill Image">
              <div class="card-body">
                <h5 class="card-title">{{ skill.title }}</h5>
                <p class="card-text">Experience: {{ skill.experience }}</p>
                <p v-if="skill.type === 'soft skill'" class="card-text">Description: {{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { id: 1, image: "https://iili.io/J7mBwhl.png", title: "HTML 5", type: "technical skill", experience: "Advanced" },
        { id: 2, image: "https://iili.io/J7mBiQV.png", title: "CSS", type: "technical skill", experience: "Advanced" },
        { id: 3, image: "https://iili.io/J7mC9Tv.png", title: "Vue 3", type: "technical skill", experience: "Advanced" },
        { id: 4, image: "https://iili.io/J7mCJQp.png", title: "JavaScript", type: "technical skill", experience: "Advanced" },
        { id: 5, image: "https://iili.io/JN1W6Bf.png", title: "Attention to Detail", type: "soft skill", experience: "Advanced", description: "Ability to be thorough and accurate in your work." },
        { id: 6, image: "https://iili.io/JN1kMiX.png", title: "Creativity", type: "soft skill", experience: "Advanced", description: "A broad term that involves skills from questioning to experimenting." },
        { id: 7, image: "https://iili.io/JN1kwJf.png", title: "Time Management", type: "soft skill", experience: "Advanced", description: "Using time wisely to work as efficiently as possible." },
        { id: 8, image: "https://iili.io/JN1ksOQ.png", title: "Adaptibility", type: "soft skill", experience: "Advanced", description: "My ability to embrace change and adjust to it with ease." },
        { id: 9, image: "https://iili.io/JN1kHtS.png", title: "Communication", type: "soft skill", experience: "Advanced", description: "The ability to convey or share ideas and feelings effectively." },

      ]
    };
  }
};
</script>