<template>
  <b-container class="header mt-5">
    <b-row align-v="center">
      <b-col>
        <sign :rotate="-1">
          <p>Le</p>
          <h1>Camping Vaillant</h1>
          <p>La 11<sup>ème</sup> fête du Crêt-Vaillant</p>
        </sign>
      </b-col>
      <b-col>
        <sign :rotate="2" :stick-width="16">
          <h2>19 & 20 JUIN 2020</h2>
          <h3>Le Locle</h3>
        </sign>
      </b-col>
    </b-row>
  </b-container>
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
