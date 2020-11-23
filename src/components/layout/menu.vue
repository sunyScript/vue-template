<template>
	<el-aside class="mainMenu">
		<el-menu
			default-active="1"
			class="el-menu-vertical-demo"
		>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-setting"/>
					<span>导航一</span>
				</template>
				<el-menu-item-group>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
export default {
	name: "mainMenu"
}
</script>

<style lang="scss">
@import './index';

.mainMenu {
	color: #333;
	width: $menu-width !important;
	background-color: $menu-color;
}
</style>