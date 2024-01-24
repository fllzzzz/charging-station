type EventCallBak = ((message?: unknown) => void);

export default abstract class Class1 {
	eventCallBackList: Map<string, EventCallBak[]>;

	abstract initialize(): boolean;

	
	on(
		eventType: string,
		cb: EventCallBak
	){
		console.log('@class => on', eventType);

		const target = this.eventCallBackList.get(eventType);

		target && target.push(cb);
		! target && this.eventCallBackList.set(
			eventType, [cb]
		);
	};

	tigger(
		eventType: string,
	){
		this.eventCallBackList.get(eventType)?.forEach(cb => cb());
	};

	constructor(){
		this.eventCallBackList = new Map();

		if(this.initialize()) {
			console.log('@class => exec');
			console.log('@class => list', this.eventCallBackList);
		}
	}
}


export class A extends Class1 {
	constructor() {
		super();
		this.on('ERROR', () => {
			console.log('@class => cb');
		})
	}

	initialize(): boolean {
		return true;
	}
}