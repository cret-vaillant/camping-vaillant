<template>
  <div class="sign" :style="{
    transform: 'rotate('+rotate+'deg)'
  }">
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
  props: {
    rotate: { default: 0 },
    stickWidth: { default: 20 },
    stickHeight: { default: 400 },
    padding: { default: 1 },
    stickTop: { default: -20 },
    stickRadius: { default: 5 }
  }
}
</script>

<style lang="scss">
.sign{
  position: relative;
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
}
</style>