import axios from 'axios'

export const DataModule = {
	state: () => ({
		allProducts: null,
		loading: true,
		showFilters: false,
		filterList: []
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
		},
		getFilteredProducts(state) {
			if (state.filterList.length > 0) {
				return state.allProducts.filter(product => {
					return state.filterList.some((e) => {
						return product.types.includes(e)
					})
				})
			} else
				return state.allProducts
		},
		getFilterList(state) {
			return state.filterList
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
		},
		setFilterList(state, data) {
			if (state.filterList.includes(data))
				state.filterList = state.filterList.filter((item) => item !== data);
			else
				state.filterList.push(data);
		},
		setFiltredProducts() {

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
		},

		addFilterItem({ commit }, data) {
			commit('setFilterList', data)
		}
	},

	namespaced: true
}