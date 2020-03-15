<template>
  <section class="header">
    <div>
      <div class="row">
        <sign :rotate="-1" class="column">
          <p>Le</p>
          <h1>Camping Vaillant</h1>
          <p>La 11<sup>ème</sup> fête du Crêt-Vaillant</p>
        </sign>
        <sign :rotate="2" :stick-width="16" class="column">
          <h2>19 & 20 JUIN 2020</h2>
          <h3>Le Locle</h3>
        </sign>
      </div>
    </div>
  </section>
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
