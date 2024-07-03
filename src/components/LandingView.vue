<template>
  <div class="container landing">
    <div class="row vh-100 align-items-center">
      <div class="col-md-4">
        <img :src="'https://asheekasamuels.github.io/All-Images/images/Asheeka1.jpg'" alt="Asheeka1" class="img-fluid w-100 mb-5" loading="lazy">
      </div>
      <div class="col">
        <div id="details">
          <h1 class="display-1">Asheeka Samuels</h1>
          <p> Aspiring Full Stack Web Developer</p>
          <p v-if="jobTitle"> and I am an <span>{{ jobTitle }}</span> </p>
          <Spinner v-else/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const jobTitle = computed(() => store.state.jobTitle)
const title = ref('Aspiring Full Stack Web Developer')
const cnt = ref(-1)

function repeat() {
  try {
    if (cnt.value == jobTitle.value?.length) cnt.value = 0
    title.value = jobTitle.value?.at(cnt.value)
    setTimeout(repeat, 2000)
    cnt.value++
  } catch (e) {
    //
  }
}

onMounted(() => {
  store.dispatch('fetchjobTitle')
  repeat()
})
</script>
