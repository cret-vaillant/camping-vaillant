<template>
  <div id="app">
    <div>
      <b-container>
        <cv-header/>
        <main class="p-3">
          <router-view/>
        </main>
      </b-container>
    </div>
    <footer>
      <b-container fluid class="pt-3 pb-4">
        <h2>
            Nous remercions chaleureusement nos partenaires pour leur précieuse aide&nbsp;!
        </h2>
      </b-container>
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

body {
  background-color: #84b4f5 !important;
}

#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222222;
  > div {
    background: linear-gradient(5deg,#bbd5fb 0%, #84b4f5 100%);
    background-image: url("background.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    padding-bottom: 23vw;
    main {
      background-color: white;
      margin-top: 8rem;
      position: relative;
      min-height: 400px;
    }
  }
  > footer {
    background: white;
  }
}
</style>
