import React from "react";
import { Formik, Form, Field } from "formik";

export default function DialogsForm(props) {
  const addMessage = (message) => {
    props.onSendMessageClick(message);
  };
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={(values) => {
        addMessage(values.message);
      }}
    >
      <Form>
        <div>
          <Field
            type={"text"}
            name={"message"}
            placeholder={"Enter your message"}
          />
        </div>

        <button type={"submit"}>Send</button>
      </Form>
    </Formik>
  );
}
