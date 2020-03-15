<template>
  <div class="sign" :style="{
    transform: 'rotate('+rotate+'deg)'
  }">
    <div class="stick" :style="{
      width: stickWidth + 'px',
      height: stickHeight + 'px',
      left: 'calc(50% - ' + stickWidth/2 + 'px)'
    }"></div>
    <div class="panel" :class="'p-' + padding">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rotate: { type: Number },
    stickWidth: { type: Number, default: 20 },
    stickHeight: { type: Number, default: 400 },
    padding: { type:String, default: "1" }
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
    background-color: grey;
    position: absolute;
    top: -20px;
  }
}
</style>