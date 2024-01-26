import { defineComponent, FunctionalComponent } from 'vue';
import { render, h } from 'vue';

interface Props {
	type: 'video' | 'digital';
	tasks: string[];
};

type Events = {
	next(value :string): void;
	close(value :number): void;
}

export const I: FunctionalComponent<Props, Events> = (
	props, context
) => {
	return <div>asdsad</div>
}