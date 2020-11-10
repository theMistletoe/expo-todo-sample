import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
};
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares:any = [];

export const store = createStore(
  rootReducer,
  composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
);