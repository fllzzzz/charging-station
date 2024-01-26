import { defineComponent, h, render, VNode } from 'vue';

import { I } from '@/Inspect/TasksModal';

export default defineComponent(
	() => {

		const II = I({
			type: 'video',
			tasks: []
		});

		return () => II;
	}
);