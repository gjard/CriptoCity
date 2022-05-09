import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h2 className="logo">Cripto City</h2>
        <nav>
          <p>Converta seu valor em BRL para cotação de criptos</p>
        </nav>
      </div>
    </header>
  );
}
