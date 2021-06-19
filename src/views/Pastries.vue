<template>
  <v-container>
    <h2>Pastries</h2>
    <food-palette v-for="food in fastFood" :food="food"/>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import FoodPalette from '@/components/FoodPalette'

export default {
  name: 'Pastries',
  components: {FoodPalette},
  computed: {
    ...mapGetters({
      fastFood: 'getPastries'
    })


  }
}
</script>

<style scoped>

</style>
