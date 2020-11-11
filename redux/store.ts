import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware()

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
};
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares:any = [sagaMiddleware];

export default function configureStore() {
  return {
    ...createStore(
      rootReducer,
      composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
    ),
    runSaga: sagaMiddleware.run,
  }
}
