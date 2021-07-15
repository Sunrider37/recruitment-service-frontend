import axios from "axios";
import { useHistory } from "react-router-dom";

export const LoginCall = async (userCredential, dispatch,error) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("http://localhost:8080/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};