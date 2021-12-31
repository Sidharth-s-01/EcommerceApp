import React from 'react'
import "./login.css"

function Login() {
    return (
        <div className="loginWrapper">
            <div className="loginMain">
                <h1>WOMZONE</h1>
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="password"/>
                <button className="buttonLoginAndRegister">Login</button>
                <div className="signUp">Sign Up</div>
            </div>
        </div>
    )
}

export default Login
