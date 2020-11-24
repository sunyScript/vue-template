<template>
	<el-select
		v-model='value'
		v-bind='$attrs'
		v-on='$listeners'
	>
		<el-option
			v-for="(item, i) in options"
			:key="i"
			:label="item.label"
			:value="item.value"
			:disabled="item.disabled"
		/>
	</el-select>
</template>

<script>
import api from '@/api'
export default {
	name: 'Vselect',
	data () {
		return {
			value: '',
			options: []
		}
	},
	props: {
		get: {
			type: Number | String | Boolean
		},
		url: {
			type: String,
			default: ''
		},
		data: {
			type: Object,
			default: ()=> {}
		}
	},
	created() {
		this.url && api[this.url](this.data).then(res => {
			if (res.state === 200 && res.data.list) {
				this.options = res.data.list
			}
		}).catch(e => {
			console.log(e.message)
		})
	},
	watch: {
		get: {
			handler() {
				this.$emit('set', this.value)
			}
		}
	}
}
</script>