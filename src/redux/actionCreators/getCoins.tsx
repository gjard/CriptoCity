import { Dispatch } from "redux";
import { ActionType, Action } from "../actionType/index";

export const getCoins = (moeda: String) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_POST_COINS_PENDING
    });

    try {
      //acessa api websockets

      const tradeWs = new WebSocket(
        `wss://ws.coincap.io/prices?assets=${moeda}`
      );
      let lista: any[] = [];
      //adicionar mais criptos à lista no index específico
      tradeWs.onmessage = function (msg) {
        //msg.data
        let jsonData = JSON.parse(msg.data);
        let jsonCripto = {};
        switch (moeda) {
          case "bitcoin":
            jsonCripto = {
              id: "bitcoin",
              valor: jsonData["bitcoin"]
            };
            break;
          case "ethereum":
            jsonCripto = {
              id: "ethereum",
              valor: jsonData["ethereum"]
            };
            break;
          case "monero":
            jsonCripto = {
              id: "monero",
              valor: jsonData["monero"]
            };
            break;
          default:
            jsonCripto = {
              id: "litecoin",
              valor: jsonData["litecoin"]
            };
            break;
        }

        lista[0] = jsonCripto;

        dispatch({
          type: ActionType.GET_POST_COINS_SUCCESS,
          payload: lista
        });
      };
    } catch (err) {
      dispatch({
        type: ActionType.GET_POST_COINS_FAIL,
        payload: "Erro"
      });
    }
  };
};
