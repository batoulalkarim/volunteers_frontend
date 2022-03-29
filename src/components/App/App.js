import React from 'react';
import Dashboard from '../Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from '../Login';
import './App.css';
import useToken from './useToken';
import Nav from '../Nav';



//now we should be able to login and stay logged in- if we want to test a new one
//in the console type localStorage.clear()
function App() {
  const {token, setToken} = useToken();

  console.log('token is ', token)

  if(!token) {
    return (
      <BrowserRouter>
        <Login setToken={setToken} />
      </BrowserRouter>
    )
  }
  return (
    <div className="wrapper">
      <h1>Live Well</h1>
      
      <BrowserRouter>
      <Nav />
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
