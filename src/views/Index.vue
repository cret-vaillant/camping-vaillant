<template>
  <div class="index">
    <h1 class="text-center mb-5">🏕</h1>
    <div class="calendar">
      <small><i>Ajoutez la fête à votre calendrier:</i></small>
      <div class="atcb" style="display:none;">
        {
          "name":"Le Camping Vaillant",
          "description":"La 11ème fête du Crêt-Vaillant\nConcerts, jeux et stands\nToutes les infos sur [url]https://cret-vaillant.ch[/url]\nYoupie!",
          "startDate":"2022-06-17",
          "endDate":"2022-06-19",
          "startTime":"16:30",
          "endTime":"02:00",
          "location":"Fête du Crêt-Vaillant, Crêt-Vaillant 16-30, 2400 Le Locle, Suisse",
          "label":"17 & 18 juin 2022",
          "options":[
            "Apple",
            "Google",
            "Outlook.com"
          ],
          "timeZone":"Europe/Zurich",
          "trigger":"click",
          "iCalFileName":"camping-vaillant"
        }
      </div>
    </div>
    <div v-if="$root.posts.length === 0">
      Chargement...
    </div>
    <post-excerpt
      v-for="post in $root.posts"
      :key="post.id"
      :post="post"
      :id="post.slug"
    />
  </div>
</template>

<script>
import { atcb_init } from 'add-to-calendar-button'
import 'add-to-calendar-button/assets/css/atcb.min.css'
import PostExcerpt from '@/components/PostExcerpt'

export default {
  components: { PostExcerpt },

  mounted: atcb_init
}
</script>

<style lang="scss">
.index {
  .calendar {
    text-align: center;
    .atcb_initialized {
      margin-top: -10px;
      margin-bottom: 40px;
      .atcb_button {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);
        border: 2px solid #ffffff;
      }
    }
  }
}
</style>