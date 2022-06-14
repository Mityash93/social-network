import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

export default function Dialogs(props) {
  const state = props.store.getState().MessagePage;

  const newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };
  const onMessageChange = (event) => {
    const body = event.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <div className={classes.Dialogs}>
      <div className={classes.Dialog}>
        {state.Dialogs.map((dialog, index) => (
          <DialogItem key={index} name={dialog.name} id={dialog.id} />
        ))}
      </div>

      <div className={classes.Messages}>
        <div>
          {state.Messages.map((message, index) => (
            <Message key={index} message={message.message} />
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
