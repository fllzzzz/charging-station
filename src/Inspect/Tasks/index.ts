import type { Props } from './template';
import { useTemplate } from './template';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTasks = defineStore('inspect-tasks', () => {
	const state = ref(true);

	const useNode = (
		p: Props
	) => computed(
		() => state.value
			? useTemplate(p, {})
			: undefined
	);

	return {
		state,
		useNode,
	}
});
