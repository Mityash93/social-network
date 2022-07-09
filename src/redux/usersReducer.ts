import { userType } from './../types/types';
import { usersAPI } from "../api/api";
import { commonReducerCase } from "../utils/usersReducerHelper";

const _follow = "FOLLOW";
const _unfollow = "UNFOLLOW";
const _setUsers = "SETUSERS";
const _setCurrentPage = "SETCURRENTPAGE";
const _setTotalUsersCount = "SETTOTALUSERSCOUNT";
const _toggleIsFetching = "TOGGLEISFETCHING";
const _toggleIsFollowingProgress = "TOGGLEISFOLLOWINGPROGRESS";

const initialState = {
  users: [] as Array<userType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users id
};

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case _follow:
      return {
        ...state,
        users: commonReducerCase(state.users, "id", action.userId, {
          followed: true,
        }),
      };
    case _unfollow:
      return {
        ...state,
        users: commonReducerCase(state.users, "id", action.userId, {
          followed: false,
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

type followSuccessType = {
  type: typeof _follow, 
  userId: number
} 

export const followSuccess = (userId: number): followSuccessType => ({ type: _follow, userId });

type unfollowSuccessType = {
  type: typeof _unfollow, 
  userId: number
} 

export const unfollowSuccess = (userId: number): unfollowSuccessType => ({ type: _unfollow, userId });

type setUsersType = {
  type: typeof _setUsers, 
  users: Array<userType>
} 

export const setUsers = (users: Array<userType>): setUsersType => ({ type: _setUsers, users });

type setCurrentPageType = {
  type: typeof _setCurrentPage, 
  currentPage: number
} 

export const setCurrentPage = (currentPage: number): setCurrentPageType => ({
  type: _setCurrentPage,
  currentPage,
});

type setTotalUsersCountType = {
  type: typeof _setTotalUsersCount, 
  totalUsersCount: number
} 

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountType => ({
  type: _setTotalUsersCount,
  totalUsersCount,
});

type toggleIsFetchingType = {
  type: typeof _toggleIsFetching, 
  isFetching: boolean
} 

export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({
  type: _toggleIsFetching,
  isFetching,
});

type toggleFollowingProgressType = {
  type: typeof _toggleIsFollowingProgress, 
  isFetching: boolean
  userId: number
} 

export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => ({
  type: _toggleIsFollowingProgress,
  isFetching,
  userId,
});

export const getUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowCommon = async (
  dispatch: any,
  userId: number,
  usersMethod: any,
  followSuccess: any
) => {
  dispatch(toggleFollowingProgress(true, userId));
  const response = await usersMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(followSuccess(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

export const followThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowCommon(dispatch, userId, usersAPI.follow, followSuccess);
  };
};

export const unfollowThunkCreator = (userId: number) => {
  return async (dispatch: any) => {
    followUnfollowCommon(dispatch, userId, usersAPI.unfollow, unfollowSuccess);
  };
};

export default usersReducer;
