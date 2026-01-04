import { combineReducers, createStore } from "redux";
import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  custome: customerReducer,
});

const store = createStore(rootReducer);

export default store;
