<template>
  <div>
    <h3 v-html="name"></h3>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>