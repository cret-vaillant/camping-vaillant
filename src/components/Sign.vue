<template>
  <div class="sign" :class="shadow ? 'sign-shadow' : ''"
    :style="{
      transform: 'rotate('+rotate+'deg)' + (
        pointed ? ' translateY(-5px) scale(1.05)' : '' 
      )
    }"
    @mouseenter="pointed = true"
    @mouseleave="pointed = false"
  >
    <div class="stick" :style="{
      width: stickWidth + 'px',
      height: stickHeight + 'px',
      left: 'calc(50% - ' + stickWidth/2 + 'px)',
      top: stickTop + 'px',
      borderRadius: stickRadius + 'px'
    }"></div>
    <div class="panel" :class="'p-' + padding">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pointed: false
    }
  },
  props: {
    rotate: { default: 0 },
    stickWidth: { default: 20 },
    stickHeight: { default: 400 },
    padding: { default: 1 },
    stickTop: { default: -20 },
    stickRadius: { default: 5 },
    shadow: { default: true }
  }
}
</script>

<style lang="scss">
.sign{
  position: relative;
  cursor: pointer;
  transition: transform .05s;
  .panel{
    position: relative;
    text-align: center;
    background-color: white;
    > * {
      margin: 0;
    }
  }
  .stick{
    background-color: #625642;
    position: absolute;
  }
  &.sign-shadow > *{
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>