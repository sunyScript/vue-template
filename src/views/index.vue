<template>
	<div class="index">
		<p>index</p>
		<router-link to="/404">404</router-link>

		<br/>
		<br/>

		<Vselect
			url=''
			:data='data'
			@change='result'
		/>

		<br/>
		<br/>

		<Vupload
			drag
			:data='data'
			:width='1024'
			:height='1024'
			:size='1024 * 5'
			@result='result'
		/>

		<br/>
		<br/>

		<Veditor/>
	</div>
</template>

<script>
	export default {
		name: 'index',
		data() {
			return {
				url: '',
				get: '',
				data: {}
			}
		},
		methods: {
			result(e) {
				console.log(e)
			}
		}
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