import hotelsTypes from './hotels.types';

const INITIAL_STATE = {
	hotel: null,
	totalPrice: 0,
};

const hotelsReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case hotelsTypes.GET_HOTEL_RESERVATION:
			return {
				...state,
				hotel: payload,
			};
		case hotelsTypes.GET_TOTAL_PRICE:
			return {
				...state,
				totalPrice: payload,
			};
		default:
			return state;
	}
};

export default hotelsReducer;
