<template>
  <div class="container p-3 about">
    <h1 id="heading">About Me</h1>
    <div class="row shadow rounded-4 infoBlocks">
      <div class="img-col leftSide">
        <img src="https://asheekasamuels.github.io/All-Images/images/Asheeka3.jpg" alt="image" class="center pic">
      </div>
      <div class="text-col rightSide" v-if="about">
        <p class="lead" v-for="(paragraph, index) in about" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  computed: {
    about() {
      return this.$store.state.about;
    }
  },
  mounted() {
    this.$store.dispatch('fetchAbout');
  }
};
</script>