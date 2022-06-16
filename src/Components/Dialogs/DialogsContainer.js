import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

export default function DialogsContainer(props) {
  const state = props.store.getState().MessagePage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  const onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <Dialogs
      updateNewMessageBody={onMessageChange}
      sendMessageCreator={onSendMessageClick}
      MessagePage={state}
    />
  );
}
