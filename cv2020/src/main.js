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
      let sections = [[]]
      tokens.forEach(t => {
        if (t.type === "html" && t.text.startsWith("<!-- section")) {
          sections.push([])
        }
        last(sections).push(t)
      })
      console.log(sections)
      console.log(parser(tokens))
    }
  }
}).$mount('#app')
