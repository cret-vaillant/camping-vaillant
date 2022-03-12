<template>
  <div id="app">
    <div class="content">
      <main>
        <router-view/>
      </main>
      <cover/>
    </div>
    <footer>
      <sponsors/>
    </footer>
  </div>
</template>

<script>
import Cover from "@/components/Cover"
import Sponsors from "@/components/Sponsors"
import "element-closest-polyfill"

export default {
  components: {
    Cover, Sponsors
  },
  mounted() {
    this.$el.addEventListener("click", event => {
      let a = event.target.closest("a")
      if (a && !a.matches(".internal")) {
        event.preventDefault()
        if (a.matches(".egg")) {
          a.querySelector(".dom").classList.toggle("discovered");
        } else {
          let url = process.env.NODE_ENV === "development" ?
            a.href :
            "https://cret-vaillant.ch/php/redirect.php?to=" + a.href
          window.open(url, "_blank")
        }
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

  .content {
    display: flex;

    main {
      width: 40%;
      padding: 20px;
    }

    header {
      width: 60%;
      height: 100vh;
      position: sticky;
      top: 0;
    }
  }
}
</style>
