import { createSlice, PayloadAction } from 'redux-starter-kit';
import { CounterState } from '../state/counter';

export const counter = createSlice({
    slice: 'counter',
    initialState: new CounterState(),
    reducers: {
        increment: state => {
          return new CounterState({
              count: state.count + 1
          });
        },
        decrement: state => {
            return new CounterState({
                count: state.count - 1
            });
        },
        multiply: (state, action: PayloadAction<number>) => {
            return new CounterState({
                count: state.count * action.payload
            });
        }
    }
});