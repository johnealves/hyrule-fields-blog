import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
