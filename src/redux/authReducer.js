const _setUserData = "SET-USER-DATA";


const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case _setUserData:
      return { 
        ...state,
        ...action.data,
        isAuth: true
      }
   
    default:
      return state;
  }
};

  export const setAuthUserData = (userId, login, email) => {
    return {
      type: _setUserData,
      data: {userId, login, email}
    };
  };

export default authReducer;