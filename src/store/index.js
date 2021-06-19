import Vue from 'vue'
import Vuex from 'vuex'
import fastFood from '@/food/fast-food'
import pastries from '@/food/pastries'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		foods: [...fastFood, ...pastries],
		cart: []
	},
	getters: {
		getFastFood(state) {
			return state.foods.filter(food => {
				return food.category === 'fast food'
			})
		},
		getDrinks(state) {
			return state.foods.filter(food => {
				return food.category === 'drinks'
			})
		},
		getPastries(state) {
			return state.foods.filter(food => {
				return food.category === 'pastries'
			})
		},
		getMain(state) {
			return state.foods.filter(food => {
				return food.category === 'main'
			})
		},
		getCart(state){
			return state.cart
		},
		cartCounter(state){
			return state.cart.length
		}
	},
	mutations: {
		addItem(state, payload){
			const options = payload.options.filter(option => option.qty > 0)
			state.cart.push({...payload, options})
		},
		removeCartItem(state, index){
			state.cart.splice(index, 1)
		}
	},
	actions: {},
	modules: {}
})
