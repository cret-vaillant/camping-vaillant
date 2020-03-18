<template>
  <b-container fluid class="pt-3 pb-4 sponsors">
    <h2 class="mb-4">Nous remercions chaleureusement nos partenaires pour leur précieuse aide&nbsp;!</h2>
    <div class="sponsor-grid">
      <div
        v-for="i in 30" :key="i"
        class="sponsor bg-primary"
        :style="{
          width: 100 + Math.random() * 100 + 'px',
          height: 100 + Math.random() * 100 + 'px'
        }"
      >{{i}}</div>
    </div>
  </b-container>
</template>

<style lang="scss">
.sponsors{
  text-align: center;
  .sponsor-grid {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .sponsor {
      margin: 5px;
    }
  }
}
</style>