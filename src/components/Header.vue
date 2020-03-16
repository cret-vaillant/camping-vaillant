<template>
  <header class="mt-5">
    <b-row>
      <b-col
        offset="0" cols="10"
        offset-sm="1" sm="8"
        offset-md="1" md="6"
        offset-lg="2" lg="5"
        offset-xl="3" xl="4"
      >
        <sign rotate="-1" padding="3" stick-height="800">
          <p>Le</p>
          <h1>Camping Vaillant</h1>
        </sign>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col
        offset="4" cols="7"
        offset-sm="4" sm="6"
        offset-md="6" md="5"
        offset-lg="6" lg="4"
        offset-xl="6" xl="3"
      >
        <sign rotate="2" stick-width="16" padding="2" stick-height="500" stick-top="0">
          <h2>19 <small>&</small> 20 JUIN 2020</h2>
        </sign>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col
        offset="1" cols="10"
        offset-sm="2" sm="8"
        offset-md="3" md="6"
        offset-lg="4" lg="4"
      >
        <sign padding="2" stick-width="12" stick-radius="0">
          <h3>11<sup>ème</sup> fête du Crêt-Vaillant</h3>
          <div class="spacer m-2"></div>
          <h3>Le Locle</h3>
        </sign>
      </b-col>
    </b-row>
  </header>
</template>

<script>
import Sign from "@/components/Sign"
export default {
  name: "Header",
  components: {
    Sign
  }
}
</script>

<style lang="scss">
header{
  .sign{
    h1,h3{
      font-style: italic;
    }
    h1{
      font-weight: 900;
      font-size: 3rem;
    }
    h2{
      font-weight: bold;
      font-size: 2.5rem;
      small{
        font-size: 1rem;
      }
    }
    h3{
      font-size: 1.3rem;
    }
    .spacer{
      background-color: #222222;
      height: 2px;
    }
  }
}
</style>