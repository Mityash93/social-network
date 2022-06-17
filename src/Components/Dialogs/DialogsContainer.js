import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

// export default function DialogsContainer(props) {
//   const state = props.store.getState().MessagePage;

//   const onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };
//   const onMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };
//   return (
//     <Dialogs
//       updateNewMessageBody={onMessageChange}
//       sendMessageCreator={onSendMessageClick}
//       MessagePage={state}
//     />
//   );
// }

const mapStateToProps = (state) => {
  return {
    MessagePage: state.MessagePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageCreator: () => {
      dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    } 
  }
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer


