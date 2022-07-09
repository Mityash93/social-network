import { postsType, profileType, photosType } from './../types/types';
import { contentAPI, usersAPI } from "../api/api";

const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const _setUserProfile = "SET-USER-PROFILE";
const _setStatus = "SET-STATUS";
const _setPhotoSuccess = "SET-PHOTO-SUCCESS";


const initialState = {
  Posts: [
    { id: 1, message: "Hi progman", likesCount: 0 },
    { id: 2, message: "Hello marvelous", likesCount: 12 },
  ] as Array<postsType>,
  NewPostText: "",
  profile: null as profileType | null,
  status: "",
}; 

export type initialStateType = typeof initialState

const postsReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case addPost:
      const newPost = {
        id: 3,
        message: state.NewPostText,
        likesCount: 0,
      };
      return {
        ...state,
        Posts: [...state.Posts, newPost],
        NewPostText: "",
      };
    case updateNewPostText:
      return {
        ...state,
        NewPostText: action.newText,
      };
    case _setUserProfile:
      return {
        ...state,
        profile: action.profile,
      };
    case _setStatus:
      return {
        ...state,
        status: action.status,
      };
    case _setPhotoSuccess:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    default:
      return state;
  }
};

type addPostActionCreatorType = {
  type: typeof addPost
}

export const addPostActionCreator = (): addPostActionCreatorType => {
  return {
    type: addPost,
  };
};

type updateNewTextActionCreatorType = {
  type: typeof updateNewPostText,
  newText: string
}

export const updateNewTextActionCreator = (text: string): updateNewTextActionCreatorType => {
  return {
    type: updateNewPostText,
    newText: text,
  };
};

type setUserProfileType = {
  type: typeof _setUserProfile,
  profile: profileType
}

const setUserProfile = (profile: profileType): setUserProfileType => {
  return {
    type: _setUserProfile,
    profile,
  };
};

type setStatusType = {
  type: typeof _setStatus,
  status: string
}

const setStatus = (status: string): setStatusType => {
  return {
    type: _setStatus,
    status,
  };
};

type setPhotoSuccessType = {
  type: typeof _setPhotoSuccess,
  photos: photosType
}

const setPhotoSuccess = (photos: photosType): setPhotoSuccessType => {
  return {
    type: _setPhotoSuccess,
    photos,
  };
};
export const getUserProfile = (userId: number) => (dispatch: any) => {
  return usersAPI.getContent(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId: number) => (dispatch: any) => {
  return contentAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status: string) => (dispatch: any) => {
  return contentAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export const savePhoto = (file: any) => (dispatch: any) => {
  return contentAPI.savePhoto(file).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setPhotoSuccess(response.data.data.photos));
    }
  });
};

export default postsReducer;
