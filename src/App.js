import './App.css';
import PlanetsPage from './/components/PlanetsPage';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import AboutTheAPI from './components/AboutTheAPI';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PlanetsPage />
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/about-the-api">
              <AboutTheAPI />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


