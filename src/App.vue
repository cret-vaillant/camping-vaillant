<template>
  <div id="app">
    <cv-header/>
    <router-view/>
  </div>
</template>

<script>
import CvHeader from "@/components/Header"
export default {
  components: {
    CvHeader
  }
}
</script>

<style lang="scss">
@import 'sscaffold-css';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
}

body, h1, h2, h3, h4, h5, h6 {
  font-family: Lato, Helvetica, Arial, sans-serif;
}

body {
  background-color: aquamarine;
}
</style>
