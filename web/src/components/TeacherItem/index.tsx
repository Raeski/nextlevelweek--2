import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
function TeacherItem () {
  return (
  <article className="teacher-item">
    <header>
      <img src="https://avatars0.githubusercontent.com/u/46768410?s=460&u=9ddb649ef8f7a768beb0f032576007957531a7a9&v=4" alt="Gustavo Raeski"/>
      <div>
        <strong>Gustavo Raeski</strong>
        <span>História</span>
      </div>
    </header>
    <p>
      Gustavo Raeski dsajhfiuashdfiuashdfiuashdfuiashdfuihasdfiuh.
      <br></br>
      Apaixonado por História
    </p>
    <footer>
      <p>
        Preço/hora 
        <strong>R$ 80,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em contato
      </button>
    </footer>
  </article>)
}

export default TeacherItem;