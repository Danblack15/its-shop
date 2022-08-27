<template>
	<div class="filtres" @click="closeModal">
		<section :class="['filtres__back', {
			'filtres__back--close': closingModal
		}]" @click.stop>
			<div class="filtres__back-close" @click="closeModal">
				<span></span>
			</div>
			<div class="filtres__item">
				<input type="checkbox" id="new" name="new" class="filtres__input" />
				<label class="filtres__label" for="new" @click="addFilterItem('new')">
					<div class="filtres__condition">
						<span class="filtres__circle"></span>
					</div>
					<p class="filtres__name">Новинки</p>
				</label>
			</div>

			<div class="filtres__item">
				<input type="checkbox" id="have" name="have" class="filtres__input" />
				<label class="filtres__label" for="have" @click="addFilterItem('have')">
					<div class="filtres__condition">
						<span class="filtres__circle"></span>
					</div>
					<p class="filtres__name">Есть в наличии</p>
				</label>
			</div>

			<div class="filtres__item">
				<input type="checkbox" id="contract" name="contract" class="filtres__input" />
				<label class="filtres__label" for="contract" @click="addFilterItem('contract')">
					<div class="filtres__condition">
						<span class="filtres__circle"></span>
					</div>
					<p class="filtres__name">Контрактные</p>
				</label>
			</div>

			<div class="filtres__item">
				<input type="checkbox" id="exclusive" name="exclusive" class="filtres__input" />
				<label class="filtres__label" for="exclusive" @click="addFilterItem('exclusive')">
					<div class="filtres__condition">
						<span class="filtres__circle"></span>
					</div>
					<p class="filtres__name">Эксклюзивные</p>
				</label>
			</div>

			<div class="filtres__item">
				<input type="checkbox" id="sale" name="sale" class="filtres__input" />
				<label class="filtres__label" for="sale" @click="addFilterItem('sale')">
					<div class="filtres__condition">
						<span class="filtres__circle"></span>
					</div>
					<p class="filtres__name">Распродажа</p>
				</label>
			</div>
		</section>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	data() {
		return {
			closingModal: false
		}
	},

	methods: {
		...mapActions({
			toggleFilters: 'data/toggleFilters',
			addFilterItem: 'data/addFilterItem'
		}),

		closeModal() {
			if (window.innerWidth <= 1200) {
				this.closingModal = true

				setTimeout(() => {
					this.toggleFilters()
					this.closingModal = false
				}, 300)
			}
		}
	},
}
</script>

<style lang="scss">
@import './FiltresBlock.scss';
</style>