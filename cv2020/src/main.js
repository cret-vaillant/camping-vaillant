import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { get } from 'axios'
import { lexer, parser } from 'marked'
import { last } from 'lodash'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created(){
    get("content.md")
      .then(r => r.data)
      .then(this.parseContent)
  },
  methods: {
    parseContent(md){
      let tokens = lexer(md)
      let sections = []
      let sectionRegEx = /<!-- section (.*) -->/
      tokens.forEach(t => {
        var sectionMatch = t.type === "html" ? t.text.match(sectionRegEx) : false
        if (sectionMatch) {
          let newTokens = []
          newTokens.links = {}
          sections.push({
            name: sectionMatch[1],
            tokens: newTokens
          })
        }
        last(sections).tokens.push(t)
      })
      console.log(sections)
      sections.forEach(s => console.log(parser(s.tokens)))
    }
  }
}).$mount('#app')
