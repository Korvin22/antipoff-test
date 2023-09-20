import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { Routes, useLocation } from "react-router-dom";
import Register from "../Register/Register";
import { Route } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiAuth } from "../../utils/Api.auth";

function App(props) {
  const [message, setMessage] = useState("");
  const [successReg, setSuccessReg] = useState(false);
  const navigate = useNavigate();

  
  
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
      .finally(() => {
      });
  }

  return (
    <div className="app">
    <Header />
    <Footer />
    <Route
              path="/signup"
              element={
                <Register
                  handleUpdateRegistration={handleUpdateRegistration}
                  message={message}
                />
              }
            />
    </div>
  );
}

export default App;
