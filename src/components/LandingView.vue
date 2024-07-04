<template>
  <div class="container landing">
    <div class="row vh-100 align-items-center">
      <div class="col-md-4">
        <img src="https://asheekasamuels.github.io/All-Images/images/Asheeka1.jpg" alt="Asheeka1" class="img-fluid w-100 mb-5" loading="lazy">
      </div>
      <div class="col">
        <div id="details">
          <h1 class="display-1">Asheeka Samuels</h1>
          <p v-if="title !== null">I am a <span> {{ title }} </span></p>
          <Spinner v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Spinner from './Spinner.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const title = computed(() => store.state.title);

onMounted(() => {
  store.dispatch('fetchTitle');
});
</script>
