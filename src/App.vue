<template>
  <div id="app">
    <div class="sky">
      <div class="content pt-5">
        <b-container>
          <cv-header/>
          <cv-menu/>
          <main class="p-3">
            <router-view/>
          </main>
        </b-container>
      </div>
    </div>
    <footer>
      <sponsors/>
    </footer>
  </div>
</template>

<script>
import CvHeader from "@/components/Header"
import Sponsors from "@/components/Sponsors"
import CvMenu from "@/components/Menu"
import "element-closest-polyfill"

export default {
  components: {
    CvHeader, Sponsors, CvMenu
  },
  mounted() {
    this.$el.addEventListener("click", event => {
      let a = event.target.closest("a")
      if (a && !a.matches(".internal")) {
        event.preventDefault()
        let url = process.env.NODE_ENV === "development" ?
          a.href :
          "https://cret-vaillant.ch/php/redirect.php?to=" + a.href
        window.open(url, "_blank")
      }
    })
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
  div.sky {
    background-color: #84b4f5;
    background-image: linear-gradient(5deg,#bbd5fb 0%, #84b4f5 100%);
  }
  div.content {
    background-image: url("background.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    padding-bottom: 20vh;
    header {
      margin-bottom: 6rem;
    }
    main {
      background-color: white;
      position: relative;
      min-height: 400px;
    }
  }
  > footer {
    background: #53b45a;
    padding-bottom: 100px;
  }
}
</style>
