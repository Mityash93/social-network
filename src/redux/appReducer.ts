import { getAuthUserData } from "./authReducer.ts";

const _initializedSuccess = "INITIALISED-SUCCESS";

export type initialStateType ={
  initialized: boolean
}

const initialState: initialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): initialStateType => {
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

type initializedSuccessActionType = {
  type: typeof _initializedSuccess
}

const initializedSuccess = (): initializedSuccessActionType => {
  return {
    type: _initializedSuccess,
  };
};
export const initializeApp = () => (dispatch: any) => {
     const promise = dispatch(getAuthUserData());

     Promise.all([promise])
     .then(() => {
        dispatch(initializedSuccess())
     })
  }

export default appReducer;
