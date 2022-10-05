import { combineReducers } from "redux";

import { legacy_createStore as createStore } from "redux";
import { orderReducer } from "./reducers/order";
const rootReducer = combineReducers({
  order: orderReducer,
});
export default createStore(rootReducer);
