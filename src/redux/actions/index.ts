import { Dispatch } from "react";

import unsplash from "../../api";
import { authKey } from "../../authKey";
import { Terror, TfetchPosts, TfetchUser } from "../../utils/FeedTypes";
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

function _setWithExpiry(key: string, value: any, ttl: number) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function _getWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

function _dispatchError(
  error: any,
  dispatch: Dispatch<TfetchPosts | TfetchUser | Terror>
) {
  if (error.response) {
    //request was made but server responded with status code different then 2xx
    if (error.response.status === 401) {
      dispatch({ type: FetchError, payload: { err: true, errMessage: "401" } });
    } else if (error.response.status === 404) {
      dispatch({ type: FetchError, payload: { err: true, errMessage: "404" } });
    } else if (error.response.status === 403) {
      dispatch({ type: FetchError, payload: { err: true, errMessage: "403" } });
    }
  } else if (error.request) {
    //request was made but no response received
    dispatch({
      type: FetchError,
      payload: { err: true, errMessage: error.message },
    });
  } else {
    //error in request config
    console.log("Error", error.message);
  }
}

export const fetchPosts =
  (page: number) =>
  async (dispatch: Dispatch<TfetchPosts | TfetchUser | Terror>) => {
    clearUser();
    clearUserPosts();
    const cache = _getWithExpiry(`feedPosts#${page}`);
    if (!cache) {
      const response = await unsplash
        .get("/photos/random", {
          params: { count: 10, client_id: authKey.access_id },
        })
        .catch((error: string) => _dispatchError(error, dispatch));
      if (response) {
        _setWithExpiry(`feedPosts#${page}`, response.data, 300000); //cache for 5 min
        dispatch({ type: FetchPosts, payload: response.data });
      }
    } else {
      dispatch({ type: FetchPosts, payload: cache });
    }
  };

export const fetchUser =
  (username: string) => async (dispatch: Dispatch<TfetchUser | Terror>) => {
    const url = "/users/" + username;
    const cache = _getWithExpiry("$" + username);
    if (!cache) {
      const response = await unsplash
        .get(url, {
          params: { username: username, client_id: authKey.access_id },
        })
        .catch((error: string) => _dispatchError(error, dispatch));
      if (response) {
        _setWithExpiry("$" + username, response.data, 300000); //cache for 5 min
        dispatch({ type: FetchUser, payload: response.data });
      }
    } else {
      dispatch({ type: FetchUser, payload: cache });
    }
  };

export const clearUser = () => (dispatch: Dispatch<TfetchUser>) => {
  dispatch({ type: ClearUser, payload: {} });
};

export const clearUserPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
  dispatch({ type: ClearUserPosts, payload: [] });
};

export const fetchAUserPosts =
  (username: string, page: number) =>
  async (dispatch: Dispatch<TfetchPosts | TfetchUser | Terror>) => {
    const url = "/users/" + username + "/photos";
    const cache = _getWithExpiry("$" + username + "#" + page);
    if (!cache) {
      const response = await unsplash
        .get(url, {
          params: {
            username: username,
            page: page,
            per_page: 9,
            client_id: authKey.access_id,
          },
        })
        .catch((error: string) => _dispatchError(error, dispatch));

      if (response) {
        _setWithExpiry("$" + username + "#" + page, response.data, 300000);
        page === 1
          ? dispatch({ type: FetchUserPostsFirst, payload: response.data })
          : dispatch({ type: FetchUserPosts, payload: response.data });
      }
    } else {
      page === 1
        ? dispatch({ type: FetchUserPostsFirst, payload: cache })
        : dispatch({ type: FetchUserPosts, payload: cache });
    }
  };

export const clearPosts = () => (dispatch: Dispatch<TfetchPosts>) => {
  dispatch({ type: ClearPosts, payload: [] });
};
