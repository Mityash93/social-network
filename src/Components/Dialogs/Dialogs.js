import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import DialogsForm from "./DialogsForm";
import Message from "./Message/Message";

export default function Dialogs(props) {
  const state = props.MessagePage;

  const onSendMessageClick = (message) => {
    props.sendMessageCreator(message);
  };

  return (
    <div className={classes.Dialogs}>
      <div className={classes.Dialog}>
        {state.Dialogs.map((dialog) => (
          <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />
        ))}
      </div>

      <div className={classes.Messages}>
        <div>
          {state.Messages.map((message) => (
            <Message key={message.id} message={message.message} />
          ))}
        </div>
        <DialogsForm onSendMessageClick={onSendMessageClick} />
      </div>
    </div>
  );
}
