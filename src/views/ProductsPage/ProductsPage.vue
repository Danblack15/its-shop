<template>
	<div class="products-page">
		<Header />
		<Slider class="products-page__slider"/>
	</div>
</template>

<script>
import Header from '@/components/Header/Header'
import Slider from '@/components/Slider/Slider'

export default {
	components: {
		Header,
		Slider
	}
}
</script>

<style lang="scss">
@import './ProductsPage.scss';
</style>