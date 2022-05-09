import { Coins } from "../reducers/index";

export enum ActionType {
  GET_POST_COINS_PENDING = "GET_POST_COINS_PENDING",
  GET_POST_COINS_SUCCESS = "GET_POST_COINS_SUCCESS",
  GET_POST_COINS_FAIL = "GET_POST_COINS_FAIL"
}

interface actionPending {
  type: ActionType.GET_POST_COINS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_POST_COINS_SUCCESS;
  payload: Coins[];
}

interface actionFail {
  type: ActionType.GET_POST_COINS_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
