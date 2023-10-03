import { useState } from "react";
import React from "react";
import exit from "../../images/exit.svg";
import { Link } from "react-router-dom";
function Header(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 550;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  
  return (
    <>
      <header className="header">
        <Link className="header__button" to='/signup' onClick={props.signOut}>
          {width > breakpoint ? "Выход" : <img src={exit} alt="exit" />}
        </Link>
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
