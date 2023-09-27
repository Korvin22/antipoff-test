import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Partner from "../Partner/Partner";
import { Routes, useLocation } from "react-router-dom";
import Register from "../Register/Register";
import Main from "../Main/Main";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiAuth } from "../../utils/Api.auth";

function App(props) {
  const [message, setMessage] = useState("");
  const [successReg, setSuccessReg] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", loggedIn);
    console.log(localStorage.loggedIn);
  }

  function handleUpdateAutharization(data) {
    apiAuth
      .authorize(data.email, data.password)
      .then((res) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", res.email);
        const jwt = localStorage.getItem("token");
        if (jwt) {
          apiAuth
            .checkToken(jwt)
            .then((res) => {
              setLoggedIn(true);
              navigate("/");
            })
            .catch((err) => console.log(err));
        }
        handleLogin();
        navigate("/");
      })
      .catch((err) => setMessage(err));
  }

  function handleUpdateRegistration(data) {
    apiAuth
      .register(data.name, data.email, data.password)
      .then((res) => {
        setSuccessReg(true);
        handleUpdateAutharization(data);
        localStorage.setItem("regName", res.name);
        localStorage.setItem("regEmail", res.email);
        navigate("/");
      })
      .catch((err) => {
        setMessage(err);
        setSuccessReg(false);
        navigate("/signup");
      })
      .finally(() => {});
  }

  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/partner" element={<Partner />} />
          <Route
            path="/signup"
            element={
              <Register
                handleUpdateRegistration={handleUpdateRegistration}
                message={message}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
