import React from "react";
import LoginForm from "./LoginForm";
import { login } from "../../redux/authReducer.ts";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Login = () => {

  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch()


  const onSubmit = (values) => {
    dispatch(login(values.email, values.password, values.rememberMe));
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}


