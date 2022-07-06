
import messageReducer, {sendMessageCreator} from './messageReducer';

it('length is increased', () => {
  const action = sendMessageCreator('hello');
  const state = {
    Messages: [
      { id: 1, message: "How are u?" },
      { id: 2, message: "What is happen?" },
      { id: 3, message: "How are u?" },
    ],
  };
  const newState = messageReducer(state, action);
  expect(newState.Messages.length).toBe(4)
});




