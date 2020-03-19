<template>
  <b-container fluid class="pt-3 pb-4 sponsors">
    <h1 class="mb-4">{{ $root.sponsorHeader }}</h1>
    <div class="sponsor-grid">
      <sign
        class="sponsor"
        stick-height="150"
        stick-width="8"
        padding="1"
        stick-top="4"
        stick-radius="0"
        :pointable="sponsor.link.length"
        :rotate="Math.random() * 4 - 2"
        v-for="sponsor in $root.sponsors"
        :key="sponsor.name"
      >
        <img
          v-if="sponsor.logo"
          :src="'logos/' + sponsor.logo + '.png'"
        />
        <h3 v-else>{{ sponsor.name }}</h3>
      </sign>
    </div>
  </b-container>
</template>

<script>
import Sign from "@/components/Sign"
export default {
  components: {
    Sign
  }
}
</script>

<style lang="scss">
.sponsors{
  text-align: center;
  h1{
    font-style: italic;
    font-weight: bold;
  }
  .sponsor-grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .sponsor {
      max-width: 200px;
      max-height: 150px;
      padding: 10px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>