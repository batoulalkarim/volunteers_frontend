import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Login.css';
import { useHistory } from 'react-router-dom';
function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();
    console.log("history: ", history)

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
          .then(json => {
              history.push('/dashboard')
              setToken(json);
          })
          .catch(error => {
              history.push('/');
              console.log(error);
          });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser({
            username,
            password
        });
    }

    return (
        <div className ="login-wrapper">
            <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type= "text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login