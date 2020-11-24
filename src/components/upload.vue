<template>
	<el-upload
		class='Vupload'
		v-bind='$attrs'
		v-on='$listeners'
		:action="action"
		:show-file-list='false'
		:on-success='onSuccess'
		:before-upload='beforeUpload'
	>
		<i class="el-icon-upload"/>
		<div class="el-upload__text">
			将文件拖到此处，或<em> 点击上传 </em>
		</div>
	</el-upload>
</template>

<script>
export default {
	name: "Vupload",
	data() {
		return {

		}
	},
	props: {
		width: {
			type: Number,
			default: 0
		},
		height: {
			type: Number,
			default: 0
		},
		size: {
			type: Number,
			default: 0
		},
		action: {
			type: String,
			default: ''
		}
	},
	methods: {
		result(e) {
			this.$emit('result', {...e})
		},
		beforeUpload(file) {
			return new Promise(async (resolve, reject) => {
				if(this.size && this.size*1024 < file.size) {
					this.result({
						error: 1,
						message: '超出文件大小限制'
					})
					return reject(false)
				}
				if(this.width || this.height) {
					let imageInfo = await this.getImageInfo(file)
					if (
						(this.width && imageInfo.width > this.width) ||
						(this.height && imageInfo.height > this.height)
					) {
						this.result({
							error: 1,
							message: '超出文件宽高大小限制'
						})
						return reject(false)
					}
				}

				this.action ? resolve(true) : (this.result({
					file,
					error: 0,
					message: '获取本地图片成功'
				}),reject(false))
			})
		},
		onSuccess(res, file) {
			this.result({
				res,
				file,
				error: 0,
				message: '获取网络图片成功'
			})
		},
		getImageInfo(file) {
			return new Promise((resolve) => {
				let reader = new FileReader()
				reader.onload = event => {
					let img = document.createElement('img')
					img.src = event.target.result
					img.onload = ()=> {
						resolve({
							width: img.width,
							height: img.height
						})
					}
				}
				reader.readAsDataURL(file)
			})
		}
	}
}
</script>