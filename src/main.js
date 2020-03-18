import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { get } from 'axios'
import { lexer, parser } from 'marked/lib/marked'
import { last } from 'lodash'
import { zipObject } from 'lodash'
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data: {
    sections: [],
    sponsors: [],
    sponsorHeader: ""
  },
  created(){
    get("content.md")
      .then(r => r.data)
      .then(this.parseContent)
      .then(this.fetchSponsors)
  },
  methods: {
    newSection(name){
      var tokens = []
      tokens.links = {}
      return { name, tokens }
    },
    parseContent(md){
      var tokens = lexer(md)
      let sections = []
      let sectionRegEx = /<!-- section (.*) -->/
      tokens.forEach(t => {
        var sectionMatch = t.type === "html" ? t.text.match(sectionRegEx) : false
        if (sectionMatch) {
          sections.push(this.newSection(sectionMatch[1]))
        } else if (sections.length === 0) {
          sections.push(this.newSection("first section"))
        }
        last(sections).tokens.push(t)
      })
      sections.forEach(s => {
        s.html = parser(s.tokens)
      })
      this.sections = sections
    },
    fetchSponsors(){
      let url =
        "https://sheets.googleapis.com/v4/spreadsheets/" +
        process.env.VUE_APP_SPREADSHEET_ID + "/values/" +
        process.env.VUE_APP_SPREADSHEET_RANGE +
        "?key=" + process.env.VUE_APP_GOOGLE_API_KEY
      
        get(url).then(response => {
          var data = response.data.values
          console.log(data)
          this.sponsorHeader = data.shift()[0]
          var header = data.shift()
          data.forEach(row => {
              var sponsor = zipObject(header, row)
              if(sponsor.name){
                  this.sponsors.push(sponsor)
              }
          })
      })
    }
  }
}).$mount('#app')
