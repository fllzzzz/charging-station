import type { ComponentConfig } from '@/ComponentManager';
import ComponentManager from "@/ComponentManager";
import { Component, h, ComponentPublicInstance,  } from 'vue';

interface TasksProps {
	type: 'video' | 'digital';
	tasks: string[];
};

export default class TasksManger extends ComponentManager<
	TasksProps
> {
	constructor(
		config: ComponentConfig<TasksProps>
	){
		super({
			comp: config.comp,
			props: config.props,
		});
	}

	open() {
		console.log(
			'@open', '\r\n',
			'state: ', this.STATE, '\r\n',
			'vnode: ', this.VNODE, '\r\n',
			'\r\n\r\n'
		);
	}
};