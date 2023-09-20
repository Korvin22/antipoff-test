import logo from "../../images/logo.svg";

import { useState } from "react";

import {Link} from "react-router-dom";
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
        <Link to="/"><img src={logo} className="logo" /></Link>
      
      </header>
      <div className="header_mobile">
        <img src={logo} className="logo" />
        <button className="header__burger" onClick={openBurger}></button>
      </div>
      <div className={`burger ${isOpen ? "burger_opened" : "burger_closed"}`}>
    
      </div>
    </>
  );
}

export default Header;
