<template>
  <v-card @click="$root.$emit('show-details', {...food})"
          class="mb-5" rounded="xl">
    <v-img aspect-ratio="1.7" :src="food.image">
      <v-row no-gutters class="fill-height" justify="start" align="end">
        <div class="primary white--text px-5 py-2 rounded-tr-xl">
          {{ food.name }}
        </div>
      </v-row>
    </v-img>
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
