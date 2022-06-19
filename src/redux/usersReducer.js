const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const setUsers = "SETUSERS";

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case follow:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case unfollow:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case setUsers:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: follow, userId });
export const unfollowAC = (userId) => ({ type: unfollow, userId });
export const setUsersAC = (users) => ({ type: setUsers, users });

export default usersReducer;
