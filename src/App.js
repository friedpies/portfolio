import React from "react";
import Navigation from "./components/Navigation";
import Splash from "./pages/Splash";
import About from "./pages/About";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Workshop from "./pages/Workshop";

import { BrowserRouter, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Route exact path="/" render={() => <Splash />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/work" render={() => <Work />} />
        <Route path="/workshop" render={() => <Workshop />} />
        <Route path="/:project" component={Project} />
      </BrowserRouter>
    </>
  );
}

export default App;
