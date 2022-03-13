<template>
  <div>
    <div v-if="$root.items.length === 0">
      Chargement...
    </div>
    <post
      v-for="item in $root.items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  components: { Post }
}
</script>

<style scoped>
.post {
  margin-bottom: 40px;
}
</style>