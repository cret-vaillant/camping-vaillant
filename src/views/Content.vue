<template>
  <div>
    <div
      v-for="section in $root.sections"
      :key="section.name"
      v-html="section.html">
    </div>
  </div>
</template>