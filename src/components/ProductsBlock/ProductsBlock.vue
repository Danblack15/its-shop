<template>
  <div class="products">
    <BreadCrumbs class="products__breadcrumbs"/>
    <h1 class="products__title">Краски</h1>
    <div class="products__info">
      <p class="products__length">{{ filtredProducts.length }} товар{{setEnding}}</p>
      <p class="products__open-filtres" @click="toggleFilters">Фильтры</p>
      <div class="products__sort">
        <div class="products__sort-title" @click="toggleModal">
          <p>Сначала дорогие</p>
          <img src="@/assets/svg/sort-arrow.svg" alt="arrow" />
        </div>
        <ul class="products__sort-list" v-if="showModal">
          <li class="products__sort-item products__sort-item--active">Сначала дорогие</li>
          <li class="products__sort-item">Сначала недорогие</li>
          <li class="products__sort-item">Сначала популярные</li>
          <li class="products__sort-item">Сначала новые</li>
        </ul>
      </div>
      <div class="products__back" v-if="showModal" @click="toggleModal"></div>
    </div>

    <section 
      class="products__grid" 
      v-masonry="'products'"
      item-selector=".products__item"
      transition-duration="0.5s"
      column-width=".products__item"
      stagger="0.03s"
			gutter="18"
      v-if="filtredProducts.length > 0"
    >
      <ProductItem 
        class="products__item" 
        v-masonry-tile
        v-for="product in filtredProducts"
        :key="product.id"
        :product="product"
      />
    </section>
    <div class="products__empty" v-else>
      <h3 class="products__empty-title">Товаров не найдено</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import BreadCrumbs from '@/components/BreadCrumbs/BreadCrumbs'

export default {
  components: {
    BreadCrumbs
  },

  data() {
    return {
      showModal: false
    }
  },

  methods: {
    ...mapActions({
      toggleFilters: 'data/toggleFilters'
    }),

    toggleModal() {
      this.showModal = !this.showModal
    },
  },

  computed: {
    ...mapGetters({
      filterList: 'data/getFilterList',
      filtredProducts: 'data/getFilteredProducts'
    }),

    setEnding() {
      switch(this.filtredProducts.length) {
        case 1:
          return ''
        case 2:
        case 3:
        case 4:
          return 'а'
        default:
          return 'ов'
      }
    }
  },

  watch: {
    showModal: function() {
      if(this.showModal){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    },
    filtredProducts: {
			handler: function() {
				setTimeout(() => {
					this.$redrawVueMasonry('products')
				}, 120)
			},
			deep: true			
		}
  }
}
</script>

<style lang="scss">
@import './ProductsBlock.scss';
</style>