<template>
	<div class="index">
		<p>index</p>
		<router-link to="/404">404</router-link>
	</div>
</template>

<script>
	export default {
		name: 'index'
	}
</script>

<style lang="scss" scoped>
.index {
	text-align: center;
	p {
		color: #52ff5c;
		font-size: 30px;
		font-weight: bold;
		line-height: 200px;
	}
}
</style>