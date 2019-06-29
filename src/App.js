import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route exact path="/" />
    </BrowserRouter>
  );
}

export default App;
