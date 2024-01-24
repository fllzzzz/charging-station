type EventHandler = ((message?: unknown) => void);

export default class BaseService {
	eventBuffrr: string[];
	eventHandlerBuffer: Map<string, EventHandler[]>;

	constructor(){
		this.eventBuffrr = [];
		this.eventHandlerBuffer = new Map();

		(! this.initialize()) &&
		this.eventBuffrr.push('ERROR_INITIALIZE');
	}

	initialize(): boolean {
		return true;
	};
	
	on(event: string, cb: EventHandler): void {
		const target = this.eventHandlerBuffer.get(event);

		target && target.push(cb);
		(! target) && this.eventHandlerBuffer.set(
			event, [cb]
		);

		this.eventBuffrr.forEach(event => this.tigger(event));
		this.eventBuffrr.length = 0;
	};

	tigger(event: string): void {
		this.eventHandlerBuffer.get(event)?.forEach(cb => cb());
	};
};