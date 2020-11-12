import hotelsTypes from './hotels.types';

export const getHotelReservation = (hotel) => ({
	type: hotelsTypes.GET_HOTEL_RESERVATION,
	payload: hotel,
});

export const getTotalPrice = (price) => ({
	type: hotelsTypes.GET_TOTAL_PRICE,
	payload: price,
});
