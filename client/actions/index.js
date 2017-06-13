import { LOGIN_PROFILE, SET_PROFILE } from './type';

export const setProfile = (data) => {
  return {
    type: SET_PROFILE,
    data,
  };
};

export const setProfileAsync = (data) => {
  return function (dispatch) {
    dispatch(setProfile(data));
  };
};

const setLoginProfile = (data) => {
  return {
    type: LOGIN_PROFILE,
    data,
  };
};

export const setLoginProfileAsync = (data) => {
  return function (dispatch) {
    dispatch(setLoginProfile(data));
  };
};
