const sendMessage = "SEND-MESSAGE";

type dialogsType = {
  id: number;
  name: string;
};
type messagesType = {
  id: number;
  message: string;
};

const initialState = {
  Dialogs: [
    { id: 1, name: "Denis" },
    { id: 2, name: "Irina" },
    { id: 3, name: "Dima" },
    { id: 4, name: "Kamilla" },
  ] as Array<dialogsType>,
  Messages: [
    { id: 1, message: "How are u?" },
    { id: 2, message: "What is happen?" },
    { id: 3, message: "How are u?" },
  ] as Array<messagesType>,
};

export type initialStateType = typeof initialState;

const messageReducer = (
  state = initialState,
  action: any
): initialStateType => {
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

type sendMessageCreatorActionType = {
  type: typeof sendMessage;
  message: string;
};

export const sendMessageCreator = (
  message: string
): sendMessageCreatorActionType => {
  return {
    type: sendMessage,
    message,
  };
};

export default messageReducer;
