const follow = "FOLLOW";
const unfollow = "UNFOLLOW";
const setUsers = "SETUSERS";
const setCurrentPage = "SETCURRENTPAGE";
const setTotalUsersCount = "SETTOTALUSERSCOUNT";

const initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 5,
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
        users: action.users,
      };
    case setCurrentPage:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case setTotalUsersCount:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: follow, userId });
export const unfollowAC = (userId) => ({ type: unfollow, userId });
export const setUsersAC = (users) => ({ type: setUsers, users });
export const setCurrentPageAC = (currentPage) => ({
  type: setCurrentPage,
  currentPage,
});
export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: setTotalUsersCount,
  totalUsersCount,
});

export default usersReducer;
