import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs(props) {
  return (
    <div className={classes.Dialogs}>
      <div className={classes.Dialog}>
        {props.Dialogs.map((dialog, index) => (
          <DialogItem key={index} name={dialog.name} id={dialog.id} />
        ))}
      </div>

      <div className={classes.Messages}>
        {props.Messages.map((message, index) => (
          <Message key={index} message={message.message} />
        ))}
      </div>
    </div>
  );
}
