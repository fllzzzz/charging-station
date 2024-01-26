import type { VNode } from 'vue';
import { defineComponent, h } from "vue";
import { RouterView } from 'vue-router';

export default defineComponent(() => () => h(
		RouterView, null, {
			default: ({Component}: {
				Component: VNode;
			}) => Component && h(Component),
		}
	)
);
