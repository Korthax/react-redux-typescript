export class TimeState {
    public time: Date = new Date();
    public isLoading: Boolean = false;

    constructor(init?: Partial<TimeState>){
        Object.assign(this, init);
    }
}