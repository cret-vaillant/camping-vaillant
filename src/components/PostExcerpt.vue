<template>
  <div class="post-excerpt">
    <h3 v-html="post.title.rendered"></h3>
    <div
      class="card"
      :class="post.sticky ? 'sticky' : ''"
    >
      <div v-html="post.excerpt.rendered"></div>
      <b-button squared variant="light" :to="post.slug" class="internal">
        VOIR PLUS…
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss">
.post-excerpt {
  h3 {
    font-size: 1.3rem;
    font-weight: 900;
    font-style: italic;
  }

  .card {
    height: 200px;
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    margin: 6px 0 20px 0;
    position: relative;
    &.sticky {
      background-image: linear-gradient(45deg, #f6a34f, #f43136, #c31b1d);
      color: white;
    }
    > div {
      overflow: hidden;
      max-height: 100%;
    }
    a.btn {
      position: absolute;
      bottom: -10px;
      right: min(40px, 5vw);
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
      z-index: 2;
    }
  }
}
</style>