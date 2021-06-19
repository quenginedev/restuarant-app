<template>
  <v-container>
    <h1>Cart</h1>
    <v-list>
      <v-list-item v-for="(cart, index) in cartItems">
        <v-list-item-avatar rounded size="72">
          <v-img contain :src="cart.image"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ cart.name }}</v-list-item-title>
          <v-list-item-group>
            <v-list-item-subtitle v-for="option in cart.options">
              <p class="my-1">{{ option.qty }} {{ option.text }} @ {{ option.price }} =
                GHS{{ option.qty * option.price }}</p>
            </v-list-item-subtitle>
          </v-list-item-group>
        </v-list-item-content>
        <v-list-item-icon>
          <v-icon @click="removeItem(index)" color="red">mdi-close</v-icon>
        </v-list-item-icon>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Total - GHS {{ total }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-btn block color="primary" large rounded>Order</v-btn>
  </v-container>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartItems: 'getCart'
    }),
    total(){
      let total = 0
      this.cartItems.forEach(item=>{
        total += item.options.reduce((total, option)=>{
          return total += option.qty * option.price
        }, 0)
      })
      return total
    }
  },
  methods: {
    removeItem(index){
      this.$store.commit('removeCartItem', index)
    }
  }
}
</script>
