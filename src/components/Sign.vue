<template>
  <div class="sign" :class="shadow ? 'sign-shadow' : ''"
    :style="style"
    @mouseenter="pointed = true"
    @mouseleave="pointed = false"
    @click="$emit('click')"
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
  computed: {
    style() {
      let rules = {
        transform: "rotate(" + this.rotate + "deg)"
      }
      if (this.pointable && this.pointed) {
        rules.transform += " translateY(-5px) scale(1.05)"
        rules.cursor = "pointer"
      }
      return rules
    }
  },
  props: {
    rotate: { default: 0 },
    stickWidth: { default: 20 },
    stickHeight: { default: 400 },
    padding: { default: 1 },
    stickTop: { default: -20 },
    stickRadius: { default: 0 },
    shadow: { default: true },
    pointable: Boolean
  }
}
</script>

<style lang="scss">
.sign{
  position: relative;
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
    background-color: #8c4936;
    position: absolute;
  }
  &.sign-shadow > *{
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
  }
}
a.sign-link {
  color: inherit;
  display: block;
  &:hover  {
    text-decoration: none;
    color: inherit;
  }
}
</style>