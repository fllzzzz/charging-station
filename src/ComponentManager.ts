import type { SetupContext, Component, Ref, VNode, ShallowRef } from 'vue';
import { ref, h, shallowRef } from 'vue';

export interface ComponentConfig<
	Props,
	Context=Partial<SetupContext>,
> {
	comp: Component;
	props?: Props;
	context?: Context;
};

type CreateCallBackFn<
	Props,
	Context=Partial<SetupContext>,
> = (
	(
		ComponentConfig: ComponentConfig<Props, Context>
	) => VNode
);

export default class ComponentManager<
	Props,
	Context=Partial<SetupContext>,
> {
	private vNode: ShallowRef<VNode | undefined>;
	private state: Ref<boolean>;
	protected componentConfig: ComponentConfig<Props, Context>;

	constructor(componentConfig: ComponentConfig<Props, Context>) {
		this.state = ref(false);
		this.vNode = shallowRef();
		this.componentConfig = componentConfig;
	}

	private createVNode(
		hook?: CreateCallBackFn<Props, Context>
	): VNode {
		let vNode :VNode;

		if(hook) {
			vNode = hook(this.componentConfig);		
		}else {
			vNode = h(
				this.componentConfig.comp,
				this.componentConfig.props
			);
		}

		return vNode;
	}

	set STATE(value: boolean) {
		if(value === this.state.value) return;

		if(value) {
			this.vNode.value = this.createVNode();
		}else {
			this.vNode.value = undefined;
		}

		this.state.value = value;
	}

	get STATE() {
		return this.state.value;
	}

	get VNODE() {
		return this.vNode.value;
	}
};