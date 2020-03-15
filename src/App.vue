<template>
  <b-container id="app">
    <cv-header/>
    <main class="p-3">
      <router-view/>
    </main>
  </b-container>
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
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
  main {
    background-color: white;
    margin-top: 8rem;
    margin-bottom: 6rem;
    position: relative;
    min-height: 400px;
  }
}
body {
  background-color: aquamarine !important;
}
</style>
