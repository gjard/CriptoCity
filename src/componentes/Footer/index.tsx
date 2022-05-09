import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <a target="_blank" rel="noreferrer" href="teste">
            Criado por Gabriel Jard e Samara Hurtado
          </a>
        </div>

        <div>
          <h3>
            Site usando websoket da API{" "}
            <a target="_blank" rel="noreferrer" href="https://docs.coincap.io/">
              CoinCap API
            </a>
          </h3>
        </div>
      </div>
    </footer>
  );
}
