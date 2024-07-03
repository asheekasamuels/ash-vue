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

  export default {
    components: {
      NavBar,
      Footer,
    },
    data(){
      return {
        isloading: false,
      };
    },
  }
</script>
<style src="@/assets/css/style.css"></style>