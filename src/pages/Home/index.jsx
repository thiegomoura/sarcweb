import React from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

export default () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>

        <main>
          <h1>Seu markeplace de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem ponto de coletas</p>

          <a href="">
            <span>></span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
}