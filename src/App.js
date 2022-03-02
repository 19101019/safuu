import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import {Account} from './pages/account';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/reports" component={Account} />
          {/* <Route path="/products" component={Products} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
