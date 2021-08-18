export type post = {
  id: string;
  created_at: string;
  updated_at: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  alt_description: string;
  blur_hash: string;
  width: number;
  height: number;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: user;
};

export type user = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  portfolio_url: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  followed_by_user: boolean;
  followers_count: number;
  following_count: number;
  bio: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  instagram_username: string;
  twitter_username: string;
};

export type Terror = {
  type: string;
  payload: {
    err: boolean;
    errMessage: string;
  };
};

export type TfetchPosts = {
  type: string;
  payload: post[];
};

export type TfetchUser = {
  type: string;
  payload: user | {};
};

export type storeState = {
  posts: post[];
  user: user;
  userPosts: post[];
  error: {
    err: boolean;
    errMessage: string;
  };
};
