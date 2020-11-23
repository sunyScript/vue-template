import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout/layout'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/index',
		component: layout,
		children: [
			{
				name: '主页',
				path: '/index',
				component: () => import(/* webpackChunkName: "index" */ '@/views/index')
			}
		]
	},
	{
		name: '404',
		path: '/404',
		component: () => import(/* webpackChunkName: "404" */ '@/views/404')
	},
	{
		path: '*',
		redirect: '/404',
		meta: {
			hidden: true
		}
	}
]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.VUE_APP_BASE,
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition
		} else {
			return {x: 0, y: 0}
		}
	}
})

export default router
