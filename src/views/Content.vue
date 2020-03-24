<template>
  <div v-html="html" />
</template>

<script>
export default {
  props: ["sectionName"],
  computed: {
    section(){
      if (this.sectionName) {
        var section = this.$root.sections.find(s => s.name === this.sectionName)
      }
      return section || this.$root.sections[0]
    },
    html() {
      return this.$root.sections.length ? this.section.html : "Chargement..."
    }
  },
  updated(){ this.$root.updateLinkHandlers("main") }
}
</script>