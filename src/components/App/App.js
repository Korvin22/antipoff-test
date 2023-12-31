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
import ProtectedRoute from "./ProtectedRoute";

function App(props) {
  const [message, setMessage] = useState("");
  const [successReg, setSuccessReg] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleUpdateRegistration(data) {
    apiAuth
      .register( data.email, data.password)
      .then((res) => {
        setSuccessReg(true);
        localStorage.setItem("regName", res.name);
        localStorage.setItem("regEmail", res.email);
        localStorage.setItem('token1', res.token)
        console.log(localStorage.token1)
        navigate("/");
      })
      .catch((err) => {
        setMessage(err);
        setSuccessReg(false);
        navigate("/signup");
      })
      .finally(() => {});
  }

  function signOut() {
    localStorage.removeItem("token1");
    localStorage.clear();
    setLoggedIn(false);}

  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route exact path="/" element={<Main loggedIn={loggedIn} signOut={signOut}/>} />
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
