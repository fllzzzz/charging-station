import { defineComponent } from 'vue';
import { useTasks } from './Tasks';

export default defineComponent(
	() => {
		const tasks = useTasks();
		const tasksNode = tasks.useNode({
			type: 'video',
			tasks: []
		});

		setTimeout(() => {
			tasks.state = false;

			console.log('@Inspect =>', tasks.state, tasksNode.value);
		}, 3000);

		return () => {
			return tasksNode.value;
		};
	}
);