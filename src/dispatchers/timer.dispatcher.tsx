import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction, ActionCreator, Dispatch } from "redux";
import { time } from "../slices/time";
import { TimeState } from "../state/time";
import { PayloadAction } from "redux-starter-kit";
import { resolve } from "path";

export const updateTime: ActionCreator<ThunkAction<Promise<void>, TimeState, null, AnyAction>> = () => {
    return async (dispatch: Dispatch)  => {
        dispatch(time.actions.setLoading(true));
        setTimeout(() => {
            dispatch(time.actions.setTime(new Date()));
            dispatch(time.actions.setLoading(false));
        }, 3000);
    };
};