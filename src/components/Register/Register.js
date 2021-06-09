import React from 'react'
import './Register.css';

function Register() {
    return (
        <div className="register">
            <h1>Register Form</h1>
            <form> 
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="UserName"/>
                <input type="Email" placeholder="Email"/>
                <input type="Password" placeholder="Password"/>
                
            </form>
            <button>Submit</button>
        </div>
    )
}

export default Register
