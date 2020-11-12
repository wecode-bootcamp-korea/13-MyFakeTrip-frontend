import userActionTypes from './user.types';

export const getUserToken = (userToken) => ({
	type: userActionTypes.GET_USERTOKEN,
	payload: userToken,
});

export const clearToken = () => ({
	type: userActionTypes.CLEAR_TOKEN,
});
