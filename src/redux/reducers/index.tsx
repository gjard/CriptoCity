import { bindActionCreators } from "redux";
import { Action, ActionType } from "../actionType/index";

export interface Coins {
  id: string;
  valor: string;
}

interface State {
  coins: Coins[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  coins: [],
  loading: false,
  error: null
};

const coinsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_POST_COINS_SUCCESS:
      return {
        loading: false,
        coins: action.payload,
        error: null
      };
    case ActionType.GET_POST_COINS_FAIL:
      return {
        loading: false,
        error: action.payload,
        coins: []
      };
    default:
      return state;
  }
};

export default coinsReducer;
