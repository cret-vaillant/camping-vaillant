<template>
  <div id="app">
    <b-container>
      <cv-header/>
      <main class="p-3">
        <router-view/>
      </main>
    </b-container>
    <footer>
      Ici, le footer
    </footer>
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
@import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i&display=swap');
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
  background-color: #b2cef9 !important;
}
</style>
