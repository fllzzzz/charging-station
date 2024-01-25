import { defineComponent, h, computed, ref } from 'vue';

import Inspect from '@/Inspect';

export default defineComponent(
	() => {
		return () => h(Inspect);
	}
);