import { authAPI } from "../api/api";

const _setUserData = "SET-USER-DATA";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
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

const setAuthUserData = (userId, login, email, isAuth) => {
  return {
    type: _setUserData,
    payload: { userId, login, email, isAuth },
  };
};
export const getAuthUserData = () => (dispatch) => {
  return authAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }
  });
};
export const login = (email, password, rememberMe) => (dispatch) => {
  return authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
    //   else {
    //     setStatus(response.data.messages)
    // }
  });
};
export const logout = () => (dispatch) => {
  return authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
