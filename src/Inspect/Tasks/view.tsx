import type { PropType } from 'vue';
import { defineComponent, onMounted, onUnmounted} from 'vue';
import styles from './view.module.scss';

export interface Props {
	type: 'video' | 'digital';
	taskList: string[];
};

export default defineComponent(
	<P extends Props>({
		type,
		taskList
	}: P) => {

		onMounted(() => {
			console.log('@Tasks => onMounted');
		});

		onUnmounted(() => {
			console.log('@Tasks => onUnmounted');
		});


		return () => 
		(
			<div class={styles.container}>
				<p>{type}</p>
				<p>{taskList}</p>
			</div>
		)
	},{
		name: 'InspectTasks',
		props: {
			type: {
				type: String as PropType<Props['type']>,
			},
			taskList: {
				type: Array as PropType<Props['taskList']>,
			}
		}
	}
);