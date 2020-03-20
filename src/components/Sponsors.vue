<template>
  <b-container fluid class="pt-3 pb-4 sponsors">
    <h1 class="mb-4">{{ $root.sponsorHeader }}</h1>
    <b-row
      class="sponsor-grid"
      align-v="center"
      align-h="center"
      no-gutters
    >
      <b-col
        v-for="(sponsor, i) in $root.sponsors"
        :key="i"
        cols="6"
        sm="auto"
        :class="sponsor.name === 'wrap' ? 'w-100' : ''"
      >
        <sign
          v-if="sponsor.name !== 'wrap'"
          class="sponsor"
          stick-height="150"
          stick-width="8"
          padding="1"
          stick-top="4"
          stick-radius="0"
          :pointable="sponsor.link !== ''"
          :rotate="Math.random() * 4 - 2"
        >
          <img
            v-if="sponsor.logo"
            :src="'logos/' + sponsor.logo + '.png'"
          />
          <h3 v-else>{{ sponsor.name }}</h3>
        </sign>
      </b-col>
    </b-row>
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
  .sponsor {
    max-width: 200px;
    max-height: 150px;
    padding: 10px;
    margin: auto;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>