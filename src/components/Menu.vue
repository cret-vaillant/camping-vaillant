<template>
  <b-row class="menu" >
    <b-col sm="4" md="3" lg="2" class="social">
      <sign pointable stick-width="4" stick-top="0" rotate="-2">
        <social-link url="facebook.com/lafeteducretvaillant"/>
      </sign>
      <sign pointable stick-width="4" stick-top="0" rotate="3">
        <social-link url="instagram.com/la_fete_du_cret_vaillant/"/>
      </sign>
    </b-col>
    <b-col sm="8" md="9" lg="10" tag="nav">
      <b-row align-h="end">
        <b-col cols="4" sm="auto"
          v-for="(section, i) in $root.sections"
          :key="section.name"
        >
          <router-link
            :to="section.name"
            :class="$route.path === '/' && i === 0 ? 'router-link-active' : ''"
          >
            <sign pointable stick-width="6" stick-top="0">
              {{ section.name }}
            </sign>
          </router-link>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
import Sign from "@/components/Sign"
import SocialLink from "@/components/SocialLink"
export default {
  components: { Sign, SocialLink }
}
</script>

<style lang="scss" scoped>
a{
  color: inherit;
  display: block;
  &:hover{
    text-decoration: none;
    color: inherit;
  }
  &.router-link-active{
    transform: translateY(-20px);
  }
}
.social{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
}
</style>