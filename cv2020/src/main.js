import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { get } from 'axios'
import { lexer } from 'marked'
import { last } from 'lodash'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data: {
    sections: []
  },
  created(){
    get("content.md")
      .then(r => r.data)
      .then(this.parseContent)
  },
  methods: {
    newSection(name){
      let tokens = []
      tokens.links = {}
      return { name, tokens }
    },
    parseContent(md){
      let tokens = lexer(md)
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
      this.sections = sections
    }
  }
}).$mount('#app')
