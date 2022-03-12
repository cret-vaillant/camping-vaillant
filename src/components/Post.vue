<template>
  <div>
    <h2 v-html="title.rendered"></h2>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>