import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { get } from 'axios'
import { zipObject } from 'lodash'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, {
  breakpoints: [`xs`, 'sm', 'md']
})

function api(uri){
  let url = `${process.env.VUE_APP_API_BASE}/${uri}`
  return fetch(url).then(r => r.json())
}

new Vue({
  router,

  render: h => h(App),

  data: {
    posts: [],
    sponsors: [],
    sponsorHeader: "",
    loading: false
  },

  created(){
    this.fetchData()
    this.fetchSponsors()
  },

  methods: {
    fetchSponsors(){
      let url =
        "https://sheets.googleapis.com/v4/spreadsheets/" +
        process.env.VUE_APP_SPREADSHEET_ID + "/values/" +
        process.env.VUE_APP_SPREADSHEET_RANGE +
        "?key=" + process.env.VUE_APP_GOOGLE_API_KEY
      
        get(url).then(response => {
          var data = response.data.values
          this.sponsorHeader = data.shift()[0]
          var header = data.shift()
          data.forEach(row => {
            var sponsor = zipObject(header, row)
            if(sponsor.name){
              this.sponsors.push(sponsor)
            }
          })
      })
    },
    setPosts(posts) {
      this.posts = posts
      localStorage.posts = JSON.stringify(this.posts)
    },
    fetchData() {
      this.loading = true
      if (localStorage.posts) {
        this.setPosts(JSON.parse(localStorage.posts))
      }
      return api('wp/v2/posts?_embed')
        .then(this.setPosts)
        .finally(() => (this.loading = false))
    }
  }
}).$mount('#app')
