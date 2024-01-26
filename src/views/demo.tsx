import { defineComponent } from 'vue';

import {
	flowDefiner
} from '@/flows/FlowDefinder';

export default defineComponent(
	() => {

		console.log(flowDefiner.getFlow());

		return () => undefined;
	}
);