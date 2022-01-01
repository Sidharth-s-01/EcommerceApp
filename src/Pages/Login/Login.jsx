import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  return (
    <div className="loginWrapper">
      <div className="loginMain">
        <h1>WOMZONE</h1>
        <input placeholder="Username" type="text" />
        <input placeholder="Password" type="password" />
        <button className="buttonLoginAndRegister">Login</button>
        <Link to="/register" style={{textDecoration:"none", color:"black",width:"100%"}}>
          <div className="signUp">Sign Up</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
