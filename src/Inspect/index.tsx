import { defineComponent, ref } from 'vue';

import Tasks from './Tasks/view';

export default defineComponent(
	() => {
		const state = ref(true);

		setTimeout(() => {
			state.value = false;
		}, 3000);

		return () => (
			state.value
			? <Tasks type='video' taskList={[]}></Tasks>
			: ''
		)	
	}, {
		name: 'Inspect'
	}
);