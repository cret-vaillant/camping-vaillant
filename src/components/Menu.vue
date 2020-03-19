<template>
  <nav>
    <b-row align-h="end">
      <b-col cols="4" sm="auto"
        v-for="section in $root.sections"
        :key="section.name"
      >
        <router-link :to="section.name">
          {{ section.name }}
        </router-link>
      </b-col>
    </b-row>
  </nav>
</template>