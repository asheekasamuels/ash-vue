<template>
  <NavBar></NavBar>
    <router-view/>
    <Landing/>
    <About/>
    <Resume/>
    <Skills/>
    <Projects/>
    <Testimonials/>
    <Contact/>
    <Spinner/>
  <Footer></Footer>
</template>

<script>
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Spinner from './components/Spinner.vue';
import About from './components/AboutView.vue';
import Landing from './components/LandingView.vue';
import Resume from './components/ResumeView.vue';
import Contact from './components/ContactView.vue';
import Projects from './components/ProjectsView.vue';
import Skills from './components/SkillsView.vue';
import Testimonials from './components/TestimonialsView.vue';

  export default {
    components: {
      NavBar,
      Footer,
      Spinner,
      Resume,
      Landing,
      About,
      Contact,
      Projects,
      Testimonials,
      Skills,
    },
    data(){
      return {
        isloading: false,
      };
    },
  }
</script>
<style src="@/assets/css/style.css"></style>