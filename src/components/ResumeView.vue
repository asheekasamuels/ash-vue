<template>
  <section class="container resume" id="education-experience">
    <div class="row">
      <h1 class="edu" id="edu">Education & Experience</h1>
    </div>
    <div class="education container-fluid">
      <ul class="timeline" v-if="resume && resume.length > 0">
        <li v-for="(item, index) in resume" :key="index" :class="{ 'timeline-inverted': index % 2 !== 0 }">
          <div class="timeline-badge" :class="getBadgeClass(item)">
            <i class="glyphicon glyphicon-credit-card"></i>
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">{{ item.title }}</h4>
            </div>
            <div class="timeline-body">
              <p v-if="item.institution">Institution: {{ item.institution }}</p>
              <p v-if="item.company">Company: {{ item.company }}</p>
              <p v-if="item.yearStarted && item.yearEnded">Duration: {{ item.yearStarted }} - {{ item.yearEnded }}</p>
              <p v-else-if="item.yearStarted">Duration: {{ item.yearStarted }} - Current</p>
              <p v-if="item.description">Description: {{ item.description }}</p>
              <p v-if="item.certificate">Certificate: {{ item.certificate }}</p>
            </div>
          </div>
        </li>
      </ul>
      <Spinner v-else />
    </div>
  </section>
</template>

<script>
import Spinner from './Spinner.vue';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      resume: null 
    };
  },
  created() {
    setTimeout(() => {
      this.resume = [
        { id: 1, title: "Student", institution: "Life Choices Academy", yearStarted: 2024, description: "Full Stack Web Development Course" },
        { id: 2, title: "Snr Associate Operations", company: "WNS Global Services", yearStarted: 2023, yearEnded: 2023, description: "Taking inbound calls and making outbound calls to customers within the USA. Creating endorsements for vehicles." },
        { id: 3, title: "Customer Advisor", company: "Sigma Connected", yearStarted: 2021, yearEnded: 2023, description: "Taking inbound calls and making outbound calls to customers within the UK. Listening to customer needs and providing solutions to customer queries. Liasing with team leader and junior operations manager." },
        { id: 4, title: "Sale Assistant", company: "Sportsmans Warehouse", yearStarted: 2019, yearEnded: 2021, description: "Assisting with queries and offering excellent customer service. Cleaning the store and maintaining outstanding store condition as well as visual merchandising standards" },
        { id: 5, title: "Student", certificate: "Matric", institution: "Steenberg High School", yearStarted: 2014, yearEnded: 2018 }
      ];
    }, 2000);
  },
  methods: {
    getBadgeClass(item) {
      if (item.title === "Student") {
        return "timeline-badge warning";
      } else if (item.title === "Snr Associate Operations" || item.title === "Customer Advisor") {
        return "timeline-badge danger";
      } else {
        return "timeline-badge info";
      }
    }
  }
};
</script>
