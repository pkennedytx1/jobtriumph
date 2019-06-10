import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Route exaxt peth ='/' component={Home}/>
      </Router>
    </div>
  );
}

export default App;
