import { defineComponent, VNode, h } from "vue";
import { RouterView } from 'vue-router';

export default defineComponent(() => () => 
	<RouterView>
		{{
			default: ({Component}: {
				Component: VNode;
			}) => Component && h(Component),
		}}
	</RouterView>
);
