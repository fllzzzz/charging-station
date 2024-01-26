import type {
	Flows,
	IFlowDefinder,
	IFlowDefinderConstructor 
} from "./IFlowDefinder";

export const FlowDefinder: IFlowDefinderConstructor =
	class FlowDefinder implements IFlowDefinder {
		flows: Flows;

		constructor(flows: Flows) {
			this.flows = flows;
		}

		getFlow(): Flows {
			return this.flows;
		}

		addFlow(

		): void {
			
		}

		removeFlow(): void {
			
		}
	};

export const flowDefiner = new FlowDefinder(new Map([
	[
		'autoInspect', {}
	],
	[
		'manualInspect', {
			childers: new Map([
				['videoInspect', {}],
				['digitalInspect', {}],
				['reportInspect', {}],
			])
		}
	],
]));