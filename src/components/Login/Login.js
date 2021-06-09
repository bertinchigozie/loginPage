import React from 'react'
import './Login.css';

function Login() {
    return (

        <div className="login">
            <h1>Login Page</h1>
            <input type="text" placeholder="UserName"/>
            <input type="Password" placeholder="Password"/>
            <button>Submit</button>
        </div>
    )
}

export default Login
