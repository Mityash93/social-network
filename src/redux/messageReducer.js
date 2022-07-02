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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case sendMessage:
      return {
        ...state,
        Messages: [...state.Messages, { id: 4, message: action.message }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (message) => {
  return {
    type: sendMessage,
    message,
  };
};

export default messageReducer;
