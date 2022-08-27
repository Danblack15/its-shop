<template>
	<div class="product">
		<div class="product__img">
			<img :src="product.img" alt="product" />
		</div>
		<div class="product__info">
			<h4 class="product__title">{{ product.name }}</h4>
			<p class="product__price">{{ product.price.split('.')[0] }} ₽</p>
			<button class="product__add">
				<img src="@/assets/svg/plus.svg" alt="add" />
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true
		}
	},

	name: 'ProductItem'
}
</script>

<style lang="scss" scoped>
@import './ProductItem.scss';
</style>