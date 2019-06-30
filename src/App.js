import React from "react";
import Navigation from "./components/Navigation";
import Splash from "./pages/Splash";
import About from "./pages/About";
import Work from "./pages/Work";
import Workshop from "./pages/Workshop";

import { BrowserRouter, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Route exact path="/" render={() => <Splash />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/work" render={() => <Work />} />
        <Route exact path="/workshop" render={() => <Workshop />} />
      </BrowserRouter>
    </>
  );
}

export default App;
