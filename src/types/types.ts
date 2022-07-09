export type photosType = {
  small: string | null;
  large: string | null;
};

export type profileType = {
  userId: number;
  photos: photosType;
};

export type postsType = {
  id: number;
  message: string;
  likesCount: number;
};

export type userType = {
  id: number;
  name: string;
  status: string;
  photos: postsType;
};
