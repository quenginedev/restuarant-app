<template>
  <v-container>
    <food-palette v-for="food in fastFood" :food="food"/>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import FoodPalette from '@/components/FoodPalette'
export default {
  name: 'FastFood',
  components: {FoodPalette},
  computed: {
    ...mapGetters({
      fastFood: 'getMain'
    }),


  }
}
</script>

<style scoped>

</style>
