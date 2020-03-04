import * as React from "react";
import { connect, } from 'react-redux';
import { AppState } from "../state/app";
import { counter } from "../slices/counter";
import { updateTime } from "../dispatchers/timer.dispatcher";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction, Action } from "redux";

export class CounterProps { 
    public count: number;
    public time: Date;
    public isLoading: Boolean;
    public onMultiply: React.Dispatch<number>;
    public increment: React.Dispatch<void>;
    public decrement: React.Dispatch<void>;
    public updateTime: React.Dispatch<void>;

    public constructor(init?: Partial<CounterProps>) {
        Object.assign(this, init);
    }
 }

class Counter extends React.Component<CounterProps> {
    public constructor(props: CounterProps) {
        super(props);
    }

    public componentDidMount() {
    }

    public increment = () => {
        this.props.increment();
    };

    public decrement = () => {
        this.props.decrement();
    };

    public multiply = () => {
        this.props.onMultiply(3);
    };

    public updateTime = () => {
        console.log("updateTime");
        this.props.updateTime();
    };

    public render() {
        return (
            <div>
                <h1>The current count is {this.props.count}</h1>

                { 
                    this.props.isLoading 
                        ? <h2>loading time...</h2> 
                        : <h2>The time is {this.props.time.toTimeString()}</h2>
                }

                <button type="button" onClick={this.increment}>
                    Increment
                </button>
                <button type="button" onClick={this.decrement}>
                    Decrement
                </button>
                <button type="button" onClick={this.multiply}>
                    Multiply
                </button>
                <button type="button" onClick={this.updateTime}>
                    Update
                </button>
            </div>
        );
    }
}

const mapStateToProps = (store: AppState) => {
    return new CounterProps({
        count: store.counter.count,
        time: store.time.time,
        isLoading: store.time.isLoading
    });
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return new CounterProps({
        onMultiply: (amount: number) => dispatch(counter.actions.multiply(amount)),
        increment: () => dispatch(counter.actions.increment()),
        decrement: () => dispatch(counter.actions.decrement()),
        updateTime: () => dispatch(updateTime())
    });
  };

export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);