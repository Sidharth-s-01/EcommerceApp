import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCart } from "../../redux/cartRedux";
import login from "../../redux/apicalls";
import API from "../../API/api";
import axios from "axios";
import "./login.css";

function Login() {

  const dispatch=useDispatch()
  const {userInfo,error,isFetching,isLoggedIn}=useSelector(state=>state.user)
  const username=useRef()
  const password=useRef()
  const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault();
    const userDetails={
      username:username.current.value,
      password:password.current.value
    }
    try{
     
      const getCart=async()=>{
        const response = await axios.get(API + "cart/find/"+userInfo?._id, {
          headers: {
            token:
              "bearer "+userInfo?.accessToken,
          },
        }
        
        );
        console.log(response.data);
        dispatch(setCart(response.data));
        navigate("/")
      }
      login(userDetails,dispatch);
      getCart();
      
      
     
    }catch(err){
      navigate("/login")
    }
    
  }

  return (
    <div className="loginWrapper">
      <div className="loginMain">
        <h1>WOMZONE</h1>
        <input placeholder="Username" type="text" ref={username}/>
        <input placeholder="Password" type="password" ref={password}/>
        <button className="buttonLoginAndRegister" onClick={handleLogin}>{isFetching ?  <CircularProgress color="white" size="10px" />: "Login"}</button>
        <Link to="/register" style={{textDecoration:"none", color:"black",width:"100%"}}>
          <div className="signUp">Sign Up</div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
