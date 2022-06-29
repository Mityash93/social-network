import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs(props) {
  const state = props.MessagePage;

  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessageCreator();
  };
  const onMessageChange = (event) => {
    const body = event.target.value;
    props.updateNewMessageBody(body);
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
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
