import logo from "../../images/logo.svg";

import { useState } from "react";

import { Link } from "react-router-dom";
function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  function openBurger() {
    setIsOpen(true);
  }

  function closeBurger() {
    setIsOpen(false);
  }
  return (
    <>
      <header className="header">
      <button className="header__button">Выход</button>
        <div className="header__text">
          <h1 className="header__title">Наша команда</h1>
          <p className="header__subtitle">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
