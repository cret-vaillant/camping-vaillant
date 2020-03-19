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
      if (this.$root.sections.length) {
        return this.section.html
      }
      return "Chargement..."
    }
  }
}
</script>