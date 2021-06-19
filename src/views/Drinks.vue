<template>
  <v-container>
    <h2 class="my-5">Drinks</h2>
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
      fastFood: 'getDrinks'
    }),


  }
}
</script>

<style scoped>

</style>
