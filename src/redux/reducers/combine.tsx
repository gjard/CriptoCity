import { combineReducers } from "redux";
import coinsReducer from "./index";

const reducers = combineReducers({
  coins: coinsReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
