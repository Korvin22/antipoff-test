import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { Routes, useLocation } from "react-router-dom";
import Register from "../Register/Register";
import { Route } from "react-router-dom";
import { useState } from "react";

function App(props) {
  const [message, setMessage] = useState("");

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
