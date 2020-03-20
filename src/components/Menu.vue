<template>
  <nav>
    <b-row align-h="end">
      <b-col cols="4" sm="auto"
        v-for="(section, i) in $root.sections"
        :key="section.name"
      >
        <router-link
          :to="section.name"
          :class="$route.path === '/' && i === 0 ? 'router-link-active' : ''"
        >
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
  display: block;
  &:hover{
    text-decoration: none;
    color: inherit;
  }
  &.router-link-active{
    transform: translateY(-20px);
  }
}
</style>