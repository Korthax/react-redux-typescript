import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'

import { ConnectedCounter } from "./components/counter";
import { counter } from "./slices/counter";
import { AppState } from "./state/app";
import { time } from "./slices/time";
import { createLogger } from 'redux-logger'
import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import thunk from "redux-thunk";

const reducer = combineReducers<AppState>({
    counter: counter.reducer,
    time: time.reducer
});

const logger = createLogger();

const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware(), logger]
});

ReactDOM.render(
    <Provider store={store}>
        <ConnectedCounter />
    </Provider>,
    document.getElementById("example")
);