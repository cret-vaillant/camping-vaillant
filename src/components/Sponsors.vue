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
        sm="auto"
        :class="sponsor.name === 'wrap' ? 'w-100' : 'col-6'"
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
          @click="open(sponsor.link)"
        >
          <img
            v-if="sponsor.logo"
            :src="'logos/' + sponsor.logo"
          />
          <h3 v-else>{{ sponsor.name }}</h3>
        </sign>
      </b-col>
      <b-col cols="6" sm="auto">
        <sign
          class="sponsor yours" stick-height="150" stick-width="8"
          padding="1" stick-top="4" stick-radius="0"
          pointable :rotate="Math.random() * 4 - 2"
          @click="open('https://forms.gle/XTjS71HFzfdut4T6A')"
        >
          <h3>Votre panneau ici</h3>
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
  },
  methods: {
    open(url) {
      url = "https://cret-vaillant.ch/php/redirect.php?to=" + url
      window.open(url, '_blank')
    }
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
      max-height: 100px;
    }
    &.yours .panel{
      color: white;
      background-color: #e91e63;
    }
  }
}
</style>