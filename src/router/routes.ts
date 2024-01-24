import type {
	RouteRecordRaw
} from 'vue-router';

export default [
	{
		name: 'demo',
		path: '/',
		component: () => import('@/views/demo')
	}
] as RouteRecordRaw[];