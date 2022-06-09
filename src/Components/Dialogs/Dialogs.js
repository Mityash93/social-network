import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItems = (props) => {
  return (
    <div className={classes.item}>
      <NavLink as={Link} to={props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.Message}>{props.message}</div>;
};

export default function Dialogs() {
  return (
    <div className={classes.Dialogs}>
      <div className={classes.Dialog}>
        <DialogItems name="Denis" id="1" />
        <DialogItems name="Irina" id="2" />
        <DialogItems name="Dima" id="3" />
        <DialogItems name="Kamilla" id="4" />
      </div>

      <div className={classes.Messages}>
        <Message message="How are u?" />
        <Message message="What is happen?" />
        <Message message="Here are u" />
      </div>
    </div>
  );
}
