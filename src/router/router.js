import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('@/pages/index.vue'),
	},
	{
		path: '/about',
		component: () => import('@/pages/about.vue'),
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
