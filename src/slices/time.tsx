import { createSlice, PayloadAction } from 'redux-starter-kit';
import { TimeState } from '../state/time';

export const time = createSlice({
    slice: 'time',
    initialState: new TimeState(),
    reducers: {
        setLoading: (state, action: PayloadAction<Boolean>) => {
          return new TimeState({
              ...state,
              isLoading: action.payload
          });
        },
        setTime: (state, action: PayloadAction<Date>) => {
            return new TimeState({
                ...state,
                time: action.payload
            });
        }
    }
});