interface FlowContext {
    hook?: (() => void);
    childers?: Flows;
};

export type Flows = Map<string, FlowContext>;

export interface IFlowDefinder {
	getFlow(): void;
	addFlow(): void;
	removeFlow(): void;
};

export interface IFlowDefinderConstructor {
	new (flows :Flows): IFlowDefinder;
};