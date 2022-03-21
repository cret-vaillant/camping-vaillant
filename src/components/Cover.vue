<template>
  <header>
    <div class="social">
      <h5>Suivez-nous:</h5>
      <sign pointable stick-width="7" stick-top="-5" rotate="-2" padding="2">
        <social-link url="facebook.com/lafeteducretvaillant" title="Vers notre page Facebook"/>
      </sign>
      <sign pointable stick-width="7" stick-top="-5" rotate="3" padding="2">
        <social-link url="instagram.com/la_fete_du_cret_vaillant/" title="Vers notre page Instragram"/>
      </sign>
    </div>
  </header>
</template>

<script>
import Sign from "@/components/Sign"
import SocialLink from "@/components/SocialLink"

export default {
  components: { Sign, SocialLink }
}
</script>

<style lang="scss" scoped>
header {
  background-image: url(/site-cover.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  h5 {
    font-size: min(4vw, 1.2rem);
    font-weight: 900;
    font-style: italic;
    color: white;
    margin-top: 12px;
    margin-right: 6px;
  }

  .social {
    width: 33.3%;
    height: 80px;
    position: absolute;
    bottom: 0;
    left: 10%;
    display: flex;
    justify-content: space-evenly;

    .sign {
      display: inline-block;
    }
  }
}
</style>