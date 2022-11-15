/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'

import './App.css';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Main from './Components/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  document.title = "WebsiteGiver.com"
  const [progress, setprogress] = useState(10)
  return (
    <div className="App">
      <LoadingBar color='#f11946' progress={progress} height={4} />
      <div>
        <Router>
          <Navigation />
          <div className="maindiv">
            <Switch>
              <Route exact path="/">
                <Main progress={setprogress} theme="Website" />
              </Route>
              <Route exact path="/games">
                <Main progress={setprogress} theme="Games" />
              </Route>
              <Route exact path="/about">
                <Main progress={setprogress} theme="About" />
              </Route>
              <Route exact path="/contact">
                <Main progress={setprogress} theme="Contact" />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

/* MyComponents.
  1. Navigation Component
  2. Intro Component
  3.Main Component{
    4. Website -{ Website's Welcome }
    5. Apps -{ App's Welcome }
    6. Contact
  }
  7. Footer
*/