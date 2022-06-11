import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

export default function DialogItem(props) {
  return (
    <div className={classes.item}>
      <NavLink as={Link} to={props.id}>
        {props.name}
      </NavLink>
    </div>
  );
}
