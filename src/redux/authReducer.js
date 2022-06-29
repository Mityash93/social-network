import { usersAPI } from "../api/api";

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
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

const setAuthUserData = (userId, login, email) => {
  return {
    type: _setUserData,
    data: { userId, login, email },
  };
};
export const getAuthUserData = () => (dispatch) => {
  return usersAPI.me().then((response) => {
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, login, email));
    }
  });
};

export default authReducer;
