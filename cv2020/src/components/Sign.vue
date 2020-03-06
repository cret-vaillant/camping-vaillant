<template>
  <div class="sign" :style="{
    transform: 'rotate('+rotate+'deg)'
  }">
    <div class="stick"></div>
    <div class="panel">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rotate: {type: Number}
  }
}
</script>

<style lang="scss">
.sign{
  position: relative;
  .panel{
    position: relative;
    padding: 20px;
    text-align: center;
    background-color: white;
  }
  .stick{
    background-color: grey;
    height: 400px;
    width: 20px;
    position: absolute;
    left: calc(50% - 10px);
    top: -20px;
  }
}
</style>