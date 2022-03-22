<template>
  <div class="post-excerpt">
    <router-link :to="post.slug" class="text-decoration-none text-reset internal">
      <h3 v-html="post.title.rendered"></h3>
    </router-link>
    <div
      class="card"
      :class="post.sticky ? 'sticky' : ''"
      :style="{
        backgroundImage: `url(${post.jetpack_featured_media_url})`
      }"
    >
      <div
        :class="post.jetpack_featured_media_url ? 'with-image' : ''"
        v-html="post.excerpt.rendered"
        @click="post.jetpack_featured_media_url ? $router.push(post.slug) : null"
      />
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
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
    margin: 6px 0 50px 0;
    position: relative;
    background-position: center;
    background-size: cover;

    &.sticky {
      >div {
        background-image: linear-gradient(45deg, #f6a34f, #f43136, #c31b1d);
        color: white;
      }
    }
    > div {
      &.with-image {
        background-image: linear-gradient(#0001, #0000);
        color: transparent;
        font-weight: 600;
        transition: all .3s;
        cursor: pointer;
        &:hover {
          color: white;
          background-image: linear-gradient(#000a, #0002);
        }
      }
      overflow: auto;
      padding: 20px;
      height: 100%;
      line-height: 1.6;
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