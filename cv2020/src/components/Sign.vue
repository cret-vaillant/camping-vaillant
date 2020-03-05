<template>
  <div class="sign">
    <div class="panel">
      <slot></slot>
    </div>
    <div class="stick"></div>
  </div>
</template>

<style lang="scss">
.sign{
  .panel{
    padding: 20px;
    text-align: center;
    background-color: white;
  }
}
</style>