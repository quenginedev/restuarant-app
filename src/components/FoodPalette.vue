<template>
  <v-card  @click="$root.$emit('show-details', {...food})" class="mb-5" rounded="xl">
    <v-img aspect-ratio="1.5" :src="food.image" />
    <v-card-title>
      {{food.name}}
      <v-spacer></v-spacer>
      <v-icon color="primary">mdi-more</v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: 'FoodPalette',
  props: {
    food: Object
  }
}
</script>

<style scoped>

</style>
