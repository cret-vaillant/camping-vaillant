<template>
  <b-container fluid class="pt-5 sponsors">
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
        <a :href="sponsor.link" class="sign-link" :class="sponsor.easter">
          <sign
            v-if="sponsor.name !== 'wrap'"
            class="sponsor" stick-height="150" stick-width="8"
            padding="1" stick-top="4" stick-radius="0"
            :pointable="sponsor.link !== ''"
            :rotate="Math.random() * 4 - 2"
            :style="{zIndex: 10*i}"
          >
            <img
              v-if="sponsor.logo"
              :src="'logos/' + sponsor.logo"
            />
            <h3 v-else>{{ sponsor.name }}</h3>
          </sign>
          <a href="https://cret-vaillant.ch/domathome">
            <img
              v-if="sponsor.easter === 'egg'"
              src="favicon.png" class="dom"
              :style="{zIndex: 10*i-1}"
            />
          </a>
        </a>
      </b-col>
      <b-col cols="6" sm="auto">
        <sign
          @click="openDonationModal"
          class="sponsor yours" stick-height="150" stick-width="8"
          padding="1" stick-top="4" stick-radius="0"
          pointable :rotate="Math.random() * 4 - 2"
          style="z-index: 1000"
        >
          <h3>Votre panneau ici</h3>
        </sign>
        <b-modal
          ref="donationModal"
          title="Contribution à la Fête du Crêt-Vaillant"
          hide-footer scrollable
          size="lg"
        >
          <div class="d-block text-center">
            Nous vous remercions chaleureusement pour l'intérêt que vous portez à notre projet&nbsp;!<br>
            Si vous désirez nous soutenir, vous pouvez utiliser ce formulaire de paiement pour nous faire parvenir votre don. ❤️
          </div>
          <div class="rnw"></div>
        </b-modal>
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
    openDonationModal() {
      window.rnw.tamaro.runWidget('.rnw', {
        language: 'fr'
      })
      this.$refs.donationModal.show()
    }
  }
}
</script>

<style lang="scss">
.sponsors{
  background-color: #115f52;
  text-align: center;
  padding-bottom: 120px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1{
    font-style: italic;
    font-weight: bold;
    color: white;
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
  .dom {
    height: 60px;
    position: absolute;
    top: 15px;
    transform: rotate(-20deg);
    transition: all 0.5s;
    &.discovered {
      top: -80px;
      height: 120px;
      transform: rotate(10deg);
    }
  }
}
</style>