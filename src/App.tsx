import React, { useState } from "react";
import { getCoins } from "./redux/actionCreators/getCoins";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "./hooks/useTypeSelector";
import "./styles.css";
import Header from "./componentes/Navbar";
import Main from "./componentes/Main";
import Coin from "./componentes/Coin";
import Footer from "./componentes/Footer";

function App() {
  const dispatch = useDispatch();
  const [valorBRL, setPostBRL] = useState("");
  const [moeda, setMoeda] = useState("");
  const { coins, loading, error } = useTypedSelector((state) => state.coins);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await dispatch(getCoins(moeda));
  };

  return (
    <div>
      <Header />
      <Main />

      <div className="divApp">
        <div>
          <span>
            Informe o valor da carteira em Real e escolha uma das moedas abaixo.
          </span>
          <form onSubmit={onSubmitHandler}>
            <input
              value={valorBRL}
              onChange={(e) => setPostBRL(e.target.value)}
            />
            <br />
            <br />

            <button
              className="botao1"
              onClick={(e) => setMoeda("bitcoin")}
              type="submit"
            >
              Bitcoin
            </button>
            <button
              className="botao1"
              onClick={(e) => setMoeda("ethereum")}
              type="submit"
            >
              Ethereum
            </button>
            <button
              className="botao1"
              onClick={(e) => setMoeda("monero")}
              type="submit"
            >
              Monero
            </button>
            <button
              className="botao1"
              onClick={(e) => setMoeda("litecoin")}
              type="submit"
            >
              Litecoin
            </button>
          </form>
        </div>
        <p></p>
        <button
          className="botao2"
          onClick={() => {
            window.location.reload();
          }}
        >
          {" "}
          Limpar dados
        </button>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {coins.map((coin) => {
              return (
                <>
                  <Coin
                    id={coin.id}
                    valor={coin.valor}
                    valorCarteira={valorBRL}
                  />
                </>
              );
            })}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
