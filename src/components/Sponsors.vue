<template>
  <b-container fluid class="pt-3 pb-4 sponsors">
    <h2 class="mb-4">{{ $root.sponsorHeader }}</h2>
    <div class="sponsor-grid">
      <div class="sponsor"
        v-for="sponsor in $root.sponsors" :key="sponsor.name"
      >
        <h3>{{ sponsor.name }}</h3>
      </div>
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