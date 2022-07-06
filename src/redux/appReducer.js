import { getAuthUserData } from "./authReducer";

const _initializedSuccess = "INITIALISED-SUCCESS";

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case _initializedSuccess :
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initializedSuccess = () => {
  return {
    type: _initializedSuccess,
  };
};
export const initializeApp = () => (dispatch) => {
     const promise = dispatch(getAuthUserData());

     Promise.all([promise])
     .then(() => {
        dispatch(initializedSuccess())
     })
  }

export default appReducer;
