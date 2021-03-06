import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function LoginForm({onSubmit}) {
  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required to put";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >


      <Form>
        <div>
          <Field type={"text"} name={"email"} placeholder={"e-mail"} />
        </div>
        <ErrorMessage name="email" component="div" />

        <div>
          <Field type={"password"} name={"password"} placeholder={"password"} />
        </div>
        <ErrorMessage name="password" component="div" />

        <div>
          <Field type={"checkbox"} name={"rememberMe"} />
          <label htmlFor={"rememberMe"}> remember me </label>
        </div>

        <button type={"submit"}>Log in</button>
      </Form>
    </Formik>
  );
}
