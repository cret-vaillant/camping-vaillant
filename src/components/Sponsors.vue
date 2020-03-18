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
        v-for="sponsor in $root.sponsors"
        :key="sponsor.name"
      >
        <h3>{{ sponsor.name }}</h3>
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
  .sponsor-grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .sponsor {
      max-width: 200px;
      max-height: 150px;
      padding: 10px;
    }
  }
}
</style>