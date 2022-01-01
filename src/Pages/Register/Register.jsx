import { Link } from "react-router-dom";
import React from "react";
import "../Login/login.css";

function Register() {
  return (
    <div className="loginWrapper">
      <div className="signUpMain">
        <h1>WOMZONE</h1>
        <input placeholder="Full name" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button className="buttonLoginAndRegister">Sign Up</button>
        <Link to="/login" style={{textDecoration:"none", color:"black",width:"100%"}}>
          <div className="signUp">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default Register;
