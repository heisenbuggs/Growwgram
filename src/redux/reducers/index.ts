import { combineReducers } from "redux";
import { storeState, Terror, TfetchPosts, TfetchUser } from "../../utils/FeedTypes";
import {
  ClearPosts,
  ClearUser,
  ClearUserPosts,
  FetchError,
  FetchPosts,
  FetchUser,
  FetchUserPosts,
  FetchUserPostsFirst,
} from "../types";
import { union } from "lodash";

export const errorReducer = (state: storeState, action: Terror) => {
  switch (action.type) {
    case FetchError:
      return action.payload;
    default:
      return false;
  }
};

const postsReducer = (state = [], action: TfetchPosts) => {
  switch (action.type) {
    case FetchPosts:
      return union(state, action.payload);
    case ClearPosts:
      return [];
    default:
      return state;
  }
};

const userPostsReducer = (state = [], action: TfetchPosts) => {
  switch (action.type) {
    case FetchUserPostsFirst:
      return [...action.payload];
    case FetchUserPosts:
      return [...state, ...action.payload];
    case ClearUserPosts:
      return [];
    default:
      return state;
  }
};

const userReducer = (state = {}, action: TfetchUser) => {
  switch (action.type) {
    case FetchUser:
      return action.payload;
    case ClearUser:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  posts: postsReducer,
  user: userReducer,
  userPosts: userPostsReducer,
  error: errorReducer,
});
