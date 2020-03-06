<template>
  <div class="home">
    <sign :rotate="-1">
      <p>Le</p>
      <h1>Camping Vaillant</h1>
      <p>La 11<sup>ème</sup> fête du Crêt-Vaillant</p>
    </sign>
    <sign :rotate="2">
      <h2>19 & 20 JUIN 2020</h2>
      <h3>Le Locle</h3>
    </sign>
  </div>
</template>

<script>
import Sign from "@/components/Sign"
export default {
  name: "Home",
  components: {
    Sign
  }
}
</script>

<style lang="scss">
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  .sign{
    float: left;
    margin: 20px;
  }
}
</style>
