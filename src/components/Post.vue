<template>
  <div class="post">
    <h3 v-html="title.rendered"></h3>
    <div
      class="excerpt"
      :class="sticky ? 'sticky' : ''"
      v-html="excerpt.rendered"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['title', 'excerpt', 'sticky']
}
</script>

<style lang="scss">
.post {
  .excerpt {
    height: 200px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    margin: 10px 0 20px 0;
    &.sticky {
      background-image: linear-gradient(45deg, #f6a34f, #f43136, #c31b1d);
      color: white;
    }
  }
}
</style>