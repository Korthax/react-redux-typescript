import { CounterState } from "./counter";
import { TimeState } from "./time";

export class AppState {
    public counter: CounterState;
    public time: TimeState;

    public constructor(init?: Partial<AppState>) {
        Object.assign(this, init);
    }
}