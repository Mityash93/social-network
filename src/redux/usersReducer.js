const _follow = "FOLLOW";
const _unfollow = "UNFOLLOW";
const _setUsers = "SETUSERS";
const _setCurrentPage = "SETCURRENTPAGE";
const _setTotalUsersCount = "SETTOTALUSERSCOUNT";
const _toggleIsFetching = "TOGGLEISFETCHING";
const _toggleIsFollowingProgress = "TOGGLEISFOLLOWINGPROGRESS";

const initialState = {
  users: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case _follow:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case _unfollow:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case _setUsers:
      return {
        ...state,
        users: action.users,
      };
    case _setCurrentPage:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case _setTotalUsersCount:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case _toggleIsFetching:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case _toggleIsFollowingProgress:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: _follow, userId });
export const unfollow = (userId) => ({ type: _unfollow, userId });
export const setUsers = (users) => ({ type: _setUsers, users });
export const setCurrentPage = (currentPage) => ({
  type: _setCurrentPage,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: _setTotalUsersCount,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: _toggleIsFetching,
  isFetching,
});
export const toggleFollowingProgress = (followingInProgress, userId) => ({
  type: _toggleIsFollowingProgress,
  followingInProgress,
  userId,
});

export default usersReducer;
