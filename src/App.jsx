import React from "react";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <section className=' max-container'>
              <HomePage />
            </section>
          </Route>
          <Route path='/about'>
            <section className=' max-container'>
              <AboutPage />
            </section>
          </Route>
          <Route path='/portfolio/:id'>
            <section className=' max-container '>
              <PortfolioPage />
            </section>
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
