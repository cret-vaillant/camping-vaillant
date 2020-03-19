<template>
  <nav>
    <b-row align-h="end">
      <b-col cols="4" sm="auto"
        v-for="section in $root.sections"
        :key="section.name"
      >
        {{ section.name }}
      </b-col>
    </b-row>
  </nav>
</template>