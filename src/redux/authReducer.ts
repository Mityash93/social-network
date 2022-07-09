import { authAPI } from "../api/api";

const _setUserData = "SET-USER-DATA";

const initialState = {
  userId: null as number | null,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
};

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case _setUserData:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type setAuthUserDataPayloadType = {
  userId: number | null, 
  login: string | null, 
  email: string | null , 
  isAuth: boolean
}

type setAuthUserDataType = {
  type: typeof _setUserData,
    payload: setAuthUserDataPayloadType,
}

const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean): setAuthUserDataType => {
  return {
    type: _setUserData,
    payload: { userId, login, email, isAuth },
  };
};
export const getAuthUserData = () => (dispatch: any) => {
  authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
  });
};
export const logout = () => (dispatch: any) => {
  return authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
