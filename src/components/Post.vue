<template>
  <div class="post">
    <router-link to="/" class="internal">← Retour au camping 🏕</router-link>
    <h2 class="mt-3" v-html="post.title.rendered"></h2>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss">
.post {
  padding: 40px 0;
  >div {
    font-size: 1.1rem;
  }
}
</style>