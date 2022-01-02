import { loginStart, loginError, loginSucess } from "./userRedux";
import API from "../API/api";
import { useDispatch } from "react-redux";
import axios from "axios";


const login = async (userDetails,dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(API + "auth/login", {
      username: userDetails.username,
      password: userDetails.password,
    });
    if (res.data) {
      dispatch(loginSucess(res.data));
    } else {
      dispatch(loginError());
    }
  } catch (err) {
    dispatch(loginError());
  }
};


export default login;