<template>
	<Editor
		id="tinyMCE"
		v-model="tinymceHtml"
		:init="editorInit"
	/>
</template>

<script>

import tinymce from '@/plugin/tinyMCE/tinymce'
import Editor from '@tinymce/tinymce-vue'
import '@/plugin/tinyMCE/themes/silver'
import '@/plugin/tinyMCE/icons/default/icons'

export default {
	name: "editor",
	components: {
		Editor
	},
	data() {
		return {
			tinymceHtml: '',
			editorInit: {
				height: 300,
				skin_url: '/tinyMCE/skins/ui/oxide'
			}
		}
	}
}
</script>
