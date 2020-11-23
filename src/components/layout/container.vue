<template>
	<el-main class="mainContainer">
		<router-view :key="$route.path"/>
	</el-main>
</template>

<script>
export default {
	name: "mainContainer"
}
</script>

<style lang="scss">
@import './index';

.mainContainer {
	color: #333;
	background-color: $container-color;
}
</style>