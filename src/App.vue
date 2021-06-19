<template>
  <v-app>
    <v-app-bar color="primary" class="rounded-t-xl" dark fixed bottom app>
      <v-row justify="space-around">
        <v-btn icon :to="{name: 'FastFood'}">
          <v-icon>mdi-food</v-icon>
        </v-btn>
        <v-btn icon :to="{name: 'Pastries'}">
          <v-icon>mdi-cupcake</v-icon>
        </v-btn>
        <v-btn icon :to="{name: 'Drinks'}">
          <v-icon>mdi-glass-wine</v-icon>
        </v-btn>
        <v-btn icon :to="{name: 'Main'}">
          <v-icon>mdi-silverware</v-icon>
        </v-btn>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-slide-y-reverse-transition mode="out-in">
        <router-view class="pt-10 mt-5"/>
      </v-slide-y-reverse-transition>
    </v-main>
    <v-dialog scrollable fullscreen v-model="sheet.show">
      <v-card v-if="sheet.food">
        <v-img :src="sheet.food.image"/>
        <v-card-title>
          {{ sheet.food.name }}
          <v-spacer/>
          GHS {{ calcTotal }}
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="(option, index) in sheet.food.options">
              <v-list-item-content>
                <p class="text-capitalize">{{ option.text }} - GHS {{ option.price.toFixed(2) }}</p>
                <v-row no-gutters justify="space-between">
                  <span class="font-weight-bold text-h6 primary--text">{{ option.qty }} = <span
                    class="caption mr-1">GHS</span>{{ option.qty * option.price }}</span>
                  <div>
                    <v-btn @click="decrementQty(index)" icon class="mr-5">
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <v-btn @click="option.qty++" icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </div>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-col cols="9">
            <v-btn block color="primary" @click="addItemToCart" rounded>Add To Cart</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn block color="primary" @click="sheet.show = false" rounded>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn fixed top right text color="primary" rounded :to="{name: 'Cart'}">
      <v-badge
        inline
        :content="cartCounter"
        :value="cartCounter"
      >
        <v-icon left>mdi-cart</v-icon>
        cart
      </v-badge>
    </v-btn>
    <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark"
           fixed
           top
           left
           color="primary"
           icon>
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      cartCounter: 'cartCounter'
    }),
    calcTotal() {
      return this.sheet.food ?
        this.sheet.food.options.reduce((total, option) => {
          return total + (option.qty * option.price)
        }, 0)
        :
        0
    }
  },
  data: () => ({
    sheet: {
      show: false,
      food: null
    }
  }),
  methods: {
    addItemToCart() {
      this.$store.commit('addItem', this.sheet.food)
      this.sheet = {
        show: false,
        food: null
      }
    },
    decrementQty(index) {
      if (this.sheet.food.options[index].qty > 0)
        this.sheet.food.options[index].qty--
    }
  },
  created() {
    this.$root.$on('show-details', food => {
      this.sheet = {
        show: true,
        food
      }
    })
  }
}
</script>
