import { createStore } from "redux";

import { combineReducers } from "redux";
import uiReducer from "./reducers/uiReducers";

const rootReducer = combineReducers({
  ui: uiReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
