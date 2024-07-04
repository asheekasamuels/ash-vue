<template>
  <div class="container about">
    <h1 id="heading">About Me</h1>
    <div class="row">
      <div class="img col-md-6">
        <img src="https://asheekasamuels.github.io/All-Images/images/Asheeka3.jpg" alt="image" class="center pic">
      </div>
      <div class="text col-md-6">
        <p class="lead" v-if="about && about.length > 0">
          <template v-for="(paragraph, index) in about" :key="index">
            {{ paragraph }}
            <br>
          </template>
        </p>
        <Spinner v-else />
      </div>
    </div>
  </div>
</template>

<script setup>
import Spinner from './Spinner.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const about = computed(() => store.state.about);

onMounted(() => {
  store.dispatch('fetchAbout');
});
</script>

