import React from "react";
import "./coin.css";
export default function Coin(props: any) {
  return (
    <div className="botoes">
      <button role="button" className="botao">
        {props.id} - <br /> USD {props.valorCarteira / props.valor}
        <br /> R$ A fazer
      </button>
    </div>
  );
}
