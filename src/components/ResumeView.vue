<template>
  <section class="container resume-container" id="resume">
    <div class="box">
      <h1 class="resume">Education & Employment</h1>
      <ul class="timeline" id="nav4">
        <li class="timeline-inverted" v-for="(item, index) in resume" :key="index">
          <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">{{ item.title }}</h4>
            </div>
            <div class="timeline-body">
              <p v-if="item.institution">Institution: {{ item.institution }}</p>
              <p v-if="item.company">Company: {{ item.company }}</p>
              <p v-if="item.yearStarted">Duration: {{ item.yearStarted }} - {{ item.yearEnded }}</p>
              <p v-if="item.description">Description: {{ item.description }}</p>
              <p v-if="item.certificate">Certificate: {{ item.certificate }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      resume: [
        { id: 1, title: "Student", institution: "Life Choices Academy", yearStarted: 2024, description: "Full Stack Web Development Course" },
        { id: 2, title: "Snr Associate Operations", company: "WNS Global Services", yearStarted: 2023, yearEnded: 2023, description: "Taking inbound calls and making outbound calls to customers within the usa. Creating endorsements for vehicles." },
        { id: 3, title: "Customer Advisor", company: "Sigma Connected", yearStarted: 2021, yearEnded: 2023, description: "Taking inbound calls and making outbound calls to customers within the uk. Listening to customers needs and providing solutions to customer queries. Liasing with team leader and junior operations manager." },
        { id: 4, title: "Sale Assistant", company: "Sportsmans Warehouse", yearStarted: 2019, yearEnded: 2021, description: "Assisting with queries and offering excellent customer service. Cleaning the store and maintaining outstanding store condition as well as visual merchandising standards" },
        { id: 5, certificate: "Matric", institution: "Steenberg High School", year: 2018 }
      ]
    };
  }
};
</script>

<style scoped>

</style>
