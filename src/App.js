import React from "react";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./components/Header/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import StackOverflow from "./components/StackOverflow";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={StackOverflow} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
