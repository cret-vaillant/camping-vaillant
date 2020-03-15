<template>
  <div>
    <div class="sign" :style="{
      transform: 'rotate('+rotate+'deg)'
    }">
      <div class="stick" :style="{
        width: stickWidth + 'px',
        height: stickHeight + 'px',
        left: 'calc(50% - ' + stickWidth/2 + 'px)'
      }"></div>
      <div class="panel">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rotate: { type: Number },
    stickWidth: { type: Number, default: 20 },
    stickHeight: { type: Number, default: 400 }
  }
}
</script>

<style lang="scss">
.sign{
  position: relative;
  max-width: 400px;
  margin: auto;
  .panel{
    position: relative;
    padding: 20px;
    text-align: center;
    background-color: white;
    > * {
      margin: 0;
    }
  }
  .stick{
    background-color: grey;
    position: absolute;
    top: -20px;
  }
}
</style>