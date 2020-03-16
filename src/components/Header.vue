<template>
  <header class="mt-5">
    <b-row align-v="center">
      <b-col>
        <sign :rotate="-1" padding="3">
          <p>Le</p>
          <h1>Camping Vaillant</h1>
          <p>La 11<sup>ème</sup> fête du Crêt-Vaillant</p>
        </sign>
      </b-col>
      <b-col>
        <sign :rotate="2" :stick-width="16" padding="2">
          <h2>19 <small>&</small> 20 JUIN 2020</h2>
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
  h1,h3{
    font-style: italic;
  }
  h1{
    font-weight: 900;
    font-size: 3rem;
  }
  h2{
    font-weight: bold;
    small{
      font-size: 1rem;
    }
  }
}
</style>