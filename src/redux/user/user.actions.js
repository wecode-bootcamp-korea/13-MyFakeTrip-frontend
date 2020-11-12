import userActionTypes from "./user.types";

export const getUserToken = (userToken) => ({
  type: userActionTypes.GET_USERTOKEN,
  payload: userToken,
});
