<template>
  <a :href="'https://' + url" target="_blank"
      :style="{
        width: '32px',
        height: '32px',
        margin: 'auto',
        display: 'block',
        backgroundImage: 'url(social/' + imgSrc + ')',
      }"
  />
</template>

<script>
export default {
  props: ["url"],
  computed: {
    imgSrc() {
      return this.url.split(".")[0] + ".png"
    }
  }
}
</script>
