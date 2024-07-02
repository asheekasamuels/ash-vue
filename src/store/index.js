import {
  createStore
} from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://asheekasamuels.github.io/vueEomp/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    resume: null,
    skills: null,
    testimonial: null,
    projects: null,

  },
  getters: {},
  mutations: {
    setJobTitle(state, value) {
      state.jobTitle = value
    },
    setAbout(state, value) {
      state.about = value
    },
    setResume(state, value) {
      state.resume = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setTestimonials(state, value) {
      state.testimonial = value
    },
    setProjects(state, value) {
      state.projects = value
    },
  },


  actions: {

    async fetchJobtitle(context) {
      try {
        let {jobTitles} = await (await axios.get(portfolioURL)).data
        context.commit("setJobTitle", jobTitles)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchAbout(context) {
      try {
        let {
          about
        } = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchResume(context) {
      try {
        let {
          resume
        } = await (await axios.get(portfolioURL)).data
        context.commit("setResume", resume)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchSkills(context) {
      try {
        let {
          skills
        } = await (await axios.get(portfolioURL)).data
        context.commit("setSkills", skills)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchTestimonials(context) {
      try {
        let {
          testimonials
        } = await (await axios.get(portfolioURL)).data
        context.commit("setTestimonials", testimonials)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },
    async fetchProjects(context) {
      try {
        let {
          projects
        } = await (await axios.get(portfolioURL)).data
        context.commit("setprojects", projects)
      } catch (e) {
        Swal.fire({
          title: "Error",
          text: "Unable  to fetch job title",
          icon: "error",
          timer: 2000,
        })
      }
    },

  },
  modules: {}
})

