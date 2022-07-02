import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router-dom";

function Login(props) {
  const onSubmit = (values) => {
    props.login(values.email, values.password, values.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
