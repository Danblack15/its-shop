<template>
  <div class="products">
    <div class="products__info">
      <p class="products__length">{{ allProducts.length }} товаров</p>
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
      transition-duration="0.7s"
      column-width=".products__item"
      stagger="0.03s"
			gutter="18"
      v-if="allProducts"
    >
      <ProductItem 
        class="products__item" 
        v-masonry-tile
        v-for="product in allProducts"
        :key="product.id"
        :product="product"
      />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
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
      allProducts: 'data/getAllProducts'
    })
  },

  watch: {
    showModal: function() {
      if(this.showModal){
        document.documentElement.style.overflow = 'hidden'
        return
      }

      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<style lang="scss">
@import './ProductsBlock.scss';
</style>