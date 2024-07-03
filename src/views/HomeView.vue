<template>
  <div class="container">
    <section class="row" id= "landing">
      <LandingView/>

    </section>
    <section class="row" id= "about">
      <AboutView/>

    </section>
    <section class="row" id= "resume">
      <ResumeView/>

    </section>
    <section class="row" id= "skills">
      <SkillsView/>

    </section>
    <section class="row" id= "projects">
      <ProjectsView/>

    </section>
    <section class="row" id= "testimonials">
      <TestimonialsView/>

    </section>
    <section class="row" id= "contact">
      <ContactView/>

    </section>


  </div>
</template>

<script>
import LandingView from '@/components/LandingView.vue'
import AboutView from '@/components/AboutView.vue'
import ResumeView from '@/components/ResumeView.vue'
import SkillsView from '@/components/SkillsView.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import TestimonialsView from '@/components/TestimonialsView.vue'
import ContactView from '@/components/ContactView.vue'
export default {
  name: 'HomeView',
  components: {
    LandingView, AboutView, ResumeView, SkillsView, ProjectsView, TestimonialsView, ContactView
  }
}
</script>

<style>

</style>
