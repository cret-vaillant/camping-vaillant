<template>
  <div>
    <article
      v-for="item in $root.items"
      :key="item.id"
      v-html="item._type === 'post' ? item.content.rendered : item.description"
    >
    </article>
    <div v-if="$root.items.length === 0">
      Chargement...
    </div>
  </div>
</template>

<script>
export default {
}
</script>