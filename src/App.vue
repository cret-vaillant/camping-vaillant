<template>
  <div id="app">
    <div class="content">
      <cover/>
      <main>
        <router-view/>
      </main>
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
    flex-direction: column;

    main {
      padding: 40px;
      > div {
        max-width: 800px;
        margin: auto;
      }
    }

    header {
      aspect-ratio: 1;
      max-height: 80vh;
      min-width: 100vw;
      height: 100vw;
      box-shadow: #0000008a 0px 0px 10px 0px;
    }

    @media only screen and (min-width: 1200px) {
      flex-direction: row-reverse;

      main {
        width: 40%;
      }

      header {
        width: 60%;
        height: 100vh;
        position: sticky;
        top: 0;
        max-height: none;
        min-width: auto;
      }
    }
  }

  footer {
    box-shadow: 0 0 10px #0000008a;
    position: absolute;
  }
}
</style>
