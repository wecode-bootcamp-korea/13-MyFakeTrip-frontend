import userActionTypes from "./user.types";

const INITIAL_STATE = {
  userToken: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case userActionTypes.GET_USERTOKEN:
      return {
        ...state,
        userToken: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
