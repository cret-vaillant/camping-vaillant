<template>
  <header>
    <b-row>
      <b-col
        offset="0" cols="10"
        offset-sm="1" sm="8"
        offset-md="1" md="6"
        offset-lg="2" lg="5"
        offset-xl="3" xl="4"
      >
        <sign 
          class="sign-1" 
          rotate="-1" 
          padding="3" 
          stick-height="800"
        >
          <p>Le</p>
          <h1>Camping Vaillant</h1>
        </sign>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col
        offset="4" cols="7"
        offset-sm="4" sm="6"
        offset-md="6" md="5"
        offset-lg="6" lg="4"
        offset-xl="6" xl="3"
      >
        <sign
          class="sign-2"
          rotate="3"
          stick-width="16"
          padding="2"
          stick-height="600"
          stick-top="0"
        >
          <div style="position: absolute;height: 18px;width: 160px;transform: rotate(35deg);top: 45%;left: calc(50% - 80px);background: rgb(246, 217, 2);"/>
          <div style="position: absolute;height: 18px;width: 170px;transform: rotate(-40deg);top: 45%;left: calc(50% - 80px);background: rgb(246, 217, 2);"/>
          <h2>19&nbsp;<small>&</small>&nbsp;20 JUIN 2020</h2>
          <h3>Le Locle</h3>
        </sign>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col
        offset="1" cols="10"
        offset-sm="2" sm="8"
        offset-md="3" md="6"
        offset-lg="4" lg="4"
      >
        <sign
          class="sign-3"
          padding="3"
          stick-width="12"
          stick-radius="0"
        >
          <h3>La 11<sup>ème</sup> fête du Crêt-Vaillant</h3>
        </sign>
      </b-col>
    </b-row>
  </header>
</template>

<script>
import Sign from "@/components/Sign"
export default {
  name: "Header",
  components: {
    Sign
  }
}
</script>

<style lang="scss">
header{
  .sign{
    margin: auto;
    h1,h3{
      font-style: italic;
    }
    h1{
      font-weight: 900;
      font-size: 3.5rem;
    }
    h2{
      font-weight: bold;
      font-size: 2.5rem;
      small{
        font-size: 1rem;
      }
    }
    h3{
      font-size: 1.3rem;
    }
    &.sign-1{
      max-width: 300px;
    }
    &.sign-3{
      max-width: 270px;
    }
  }
}
</style>