<template>
	<header class="header">
		<ModalHeader 
			class="header__modal" 
			v-if="showModal"
			@showModal="showModal = false"
		/>
		<img 
			src="@/assets/svg/open-modal.svg" 
			alt="open" 
			class="header__open"
			@click="openModal"
		/>
		<div class="header__left">
			<img src="@/assets/svg/logo.svg" alt="logo" />
			<NavBar class="header__nav"/>
		</div>

		<div class="header__right">
			<HeaderCall class="header__call"/>
			<div class="header__menu">
				<HeaderMenu class="header__menu-list"/>
				<BasketSize />
			</div>
		</div>
	</header>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import HeaderMenu from '@/components/HeaderMenu/HeaderMenu'
import BasketSize from '@/components/BasketSize/BasketSize'
import ModalHeader from '@/components/ModalHeader/ModalHeader'
import HeaderCall from '@/components/HeaderCall/HeaderCall'

export default {
	components: {
		NavBar,
		HeaderMenu,
		BasketSize,
		ModalHeader,
		HeaderCall
	},

	data() {
		return {
			showModal: false
		}
	},

	methods: {
		openModal() {
			this.showModal = true
		}
	}
}
</script>

<style lang="scss">
@import './HeaderBlock.scss';
</style>