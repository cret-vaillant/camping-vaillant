<template>
  <div>
    <post v-if="post" :post="post"/>
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
    post() {
      return this.$root.posts.find(p => p.slug === this.slug)
    }
  }
}
</script>

<style scoped>
</style>