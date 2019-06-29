import React from "react";
import Navigation from "./components/Navigation";
import Splash from "./components/Splash";
import About from "./components/About";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Splash />} />
      <Route exact path="/about" render={() => <About />} />
    </BrowserRouter>
  );
}

export default App;
