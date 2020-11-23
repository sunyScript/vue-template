<template>
	<el-header class="mainHeader">
		<div class="logo">
			logo
		</div>

		<div class="user">
			<el-dropdown>
				<div class="el-dropdown-link">
					<span>Admin</span>
					<el-avatar
						size="medium"
						:src="circleUrl"
					/>
				</div>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>
						个人设置
					</el-dropdown-item>
					<el-dropdown-item divided>
						退出登录
					</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</el-header>
</template>

<script>
export default {
	name: "mainHeader",
	data() {
		return {
			circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
		}
	}
}
</script>

<style lang="scss">
@import './index';

.mainHeader {
	color: #333;
	padding: 0 20px;
	background-color: $header-color;
	height: $header-height !important;
	line-height: $header-height !important;

	& > div {
		height: 100%;
	}

	.logo {
		float: left;
		text-align: center;
		max-width: $logo-width;

		img {
			width: $logo-width;
			display: inline-block;
		}
	}

	.user {
		float: right;
		max-width: calc(100% - #{$logo-width});

		.el-dropdown-link {
			cursor: pointer;

			span {
				vertical-align: middle;
				margin-right: 10px;
			}
		}
	}
}
</style>