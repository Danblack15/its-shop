import axios from 'axios'

export const DataModule = {
	state: () => ({
		allProducts: null,
		loading: true,
		// showFilters: window.innerWidth <= 1280 ? false : true
		showFilters: false
	}),

	getters: {
		getAllProducts(state) {
			return state.allProducts
		},
		getLoading(state) {
			return state.loading
		},
		getShowFilters(state) {
			return state.showFilters
		}
	},

	mutations: {
		setAllProducts(state, data) {
			state.allProducts = data
		},
		setLoading(state, data) {
			state.loading = data
		},
		setShowFilters(state, data) {
			state.showFilters = data
		}
	},

	actions: {
		async allProductsGet({ commit }) {
			try {
				const api = 'https://6307867746372013f56af52c.mockapi.io/api/products/products'
				const res = await axios.get(api)

				commit('setAllProducts', res.data)

				commit('setLoading', false)
			} catch {
				alert('Ошибка получения данных')
			} finally {

			}
		},

		toggleFilters({ state, commit }) {
			if (!state.showFilters)
				document.documentElement.style.overflow = 'hidden'
			else
				document.documentElement.style.overflow = 'auto'

			commit('setShowFilters', !state.showFilters)
		}
	},

	namespaced: true
}