<template>
  <div>
    <post v-if="item" :item="item"/>
    <div v-else-if="$root.loading">Chargement...</div>
    <div v-else>404: pas trouvé, déso... 🦆</div>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  props: ['slug'],

  components: { Post },

  computed: {
    item() {
      return this.$root.items.find(i => i.slug === this.slug)
    }
  }
}
</script>

<style scoped>
</style>