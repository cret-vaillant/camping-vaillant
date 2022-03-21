<template>
  <div class="post">
    <h3 v-html="post.title.rendered"></h3>
    <div
      class="excerpt"
      :class="post.sticky ? 'sticky' : ''"
      v-html="post.excerpt.rendered"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss">
.post {
  h3 {
    font-size: 1.3rem;
    font-weight: 900;
    font-style: italic;
  }

  .excerpt {
    height: 200px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    margin: 6px 0 20px 0;
    &.sticky {
      background-image: linear-gradient(45deg, #f6a34f, #f43136, #c31b1d);
      color: white;
    }
  }
}
</style>