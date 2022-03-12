<template>
  <div>
    <div v-if="$root.items.length === 0">
      Chargement...
    </div>
    <article
      v-for="item in $root.items"
      :key="item.id"
    >
      <component :is="item._type" v-bind="item"></component>
    </article>
  </div>
</template>

<script>
import Post from '@/components/Post'
import Product from '@/components/Product'

export default {
  components: { Post, Product }
}
</script>

<style scoped>
article {
  margin-bottom: 40px;
}
</style>