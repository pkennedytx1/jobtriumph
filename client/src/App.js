import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Job from './components/Job';
import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Route exact path ='/home' component={Home}/>
        <Route exact path='/newjob' component={Job} />
        <Route exact path='/profile' component={Profile} />
      </Router>
    </div>
  );
}

export default App;
