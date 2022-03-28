import React from 'react';
import Dashboard from '../Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../Login';
import './App.css';
import useToken from './useToken';


//now we should be able to login and stay logged in- if we want to test a new one
//in the console type localStorage.clear()
function App() {
  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Live Well</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
