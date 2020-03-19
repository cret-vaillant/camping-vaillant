<template>
  <nav>
    <b-row align-h="end">
      <b-col cols="4" sm="auto"
        v-for="section in $root.sections"
        :key="section.name"
      >
        <router-link :to="section.name">
          <sign
            pointable
            stick-width="6"
            stick-top="0"
          >
            {{ section.name }}
          </sign>
        </router-link>
      </b-col>
    </b-row>
  </nav>
</template>

<script>
import Sign from "@/components/Sign"
export default {
  components: { Sign }
}
</script>

<style lang="scss" scoped>
a{
  color: inherit;
  &:hover{
    text-decoration: none;
    color: inherit;
  }
}
</style>