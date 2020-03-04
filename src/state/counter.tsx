export class CounterState {
    public count: number = 0;

    constructor(init?: Partial<CounterState>){
        Object.assign(this, init);
    }
}