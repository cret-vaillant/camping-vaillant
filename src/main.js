import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { get } from 'axios'
import { orderBy, zipObject } from 'lodash'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, {
  breakpoints: [`xs`, 'sm', 'md']
})

let username = process.env.VUE_APP_API_USERNAME
let password = process.env.VUE_APP_API_PASSWORD

let headers = new Headers({
  Authorization: 'Basic ' + btoa(`${username}:${password}`)
})

function api(uri){
  let url = `${process.env.VUE_APP_API_BASE}/${uri}`
  return fetch(url, { headers }).then(r => r.json())
}

new Vue({
  router,

  render: h => h(App),

  data: {
    posts: [],
    products: [],
    sponsors: [],
    sponsorHeader: "",
    loading: false
  },

  computed: {
    items() {
      return orderBy(
        [...this.posts, ...this.products],
        item => item.date ?? item.date_created,
        ['desc']
      )
    }
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
      this.posts = posts.map(p => ({ ...p, _type: 'post' }))
      localStorage.posts = JSON.stringify(this.posts)
    },
    setProducts(products) {
      this.products = products.map(p => ({ ...p, _type: 'product' }))
      localStorage.products = JSON.stringify(this.products)
    },
    fetchData() {
      this.loading = true
      if (localStorage.posts) {
        this.setPosts(JSON.parse(localStorage.posts))
        this.setProducts(JSON.parse(localStorage.products))
      }
      return Promise.all([
        api('wp/v2/posts?_embed').then(this.setPosts),
        api('wc/v3/products').then(this.setProducts)
      ]).finally(() => (this.loading = false))
    }
  }
}).$mount('#app')
