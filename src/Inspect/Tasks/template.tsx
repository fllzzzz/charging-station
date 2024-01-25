import type { SetupContext } from 'vue';
import styles from './node.module.scss';

export interface Props {
	type: 'video' | 'digital';
	tasks: string[];
};

function useTemplate(
	{type, tasks}: Props,
	context: Partial<SetupContext>
) {
	return (
		<div class={styles.container}>
			{type + tasks}
		</div>
	)
};

export {
	useTemplate
};