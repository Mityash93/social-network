const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY";
const sendMessage = "SEND-MESSAGE";

const initialState = {
  Dialogs: [
    { id: "1", name: "Denis" },
    { id: "2", name: "Irina" },
    { id: "3", name: "Dima" },
    { id: "4", name: "Kamilla" },
  ],
  Messages: [
    { id: 1, message: "How are u?" },
    { id: 2, message: "What is happen?" },
    { id: 3, message: "How are u?" },
  ],
  newMessageBody: "",
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case updateNewMessageBody:
      return {
        ...state, 
        newMessageBody: action.body
      }
    case sendMessage:
      const body = state.newMessageBody;
      return {
        ...state,
        Messages: [...state.Messages, { id: 4, message: body }],
        newMessageBody: ""
      }
    
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
    return {
      type: sendMessage,
    };
  };
  export const updateNewMessageBodyCreator = (body) => {
    return {
      type: updateNewMessageBody,
      body: body,
    };
  };

export default messageReducer;
