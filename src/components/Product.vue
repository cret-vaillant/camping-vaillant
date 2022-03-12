<template>
  <div>
    <h2 v-html="name"></h2>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>