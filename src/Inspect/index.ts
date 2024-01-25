import { defineComponent, h, onMounted } from 'vue';
import TasksManger from './TasksManager';

const Tasks = defineComponent(() => {

	onMounted(() => {
		console.log(99999999999999);
		console.log(document.querySelector('.aaa'));
	});

	return () => h('div', {class: 'aaa', style: {
		height: '200px',
		width: '200px',
		backgroundColor: 'red',
	}})
});


export default defineComponent(
	() => {
		const TasksMgr = new TasksManger({
			comp: Tasks,
			props: {
				type: 'video',
				tasks: []
			}
		});

		

		TasksMgr.STATE = true;

		TasksMgr.open();

		return () => TasksMgr.VNODE;
	}
);