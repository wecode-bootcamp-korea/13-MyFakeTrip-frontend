import AirTicketsTypes from './airTickets.types';
import {
	orderByFastestTime,
	changeDateFormatForFetching,
} from './airTickets.utils';

export const getAirTicketsData = (airTicketsList) => ({
	type: AirTicketsTypes.GET_AIRTICKETS_DATA,
	payload: airTicketsList,
});

export const fetchAirTicketsDataSuccess = () => ({
	type: AirTicketsTypes.FETCH_AIRTICKETS_DATA_SUCCESS,
});

export const fetchAirTicketsDataStart = () => ({
	type: AirTicketsTypes.FETCH_AIRTICKETS_DATA_START,
});

export const orderByLowestPrice = (airTicketsList) => ({
	type: AirTicketsTypes.ORDER_BY_LOWEST_PRICE,
	payload: [...airTicketsList.sort((a, b) => a.basic_price - b.basic_price)],
});

export const orderByHighestPrice = (airTicketsList) => ({
	type: AirTicketsTypes.ORDER_BY_HIGHEST_PRICE,
	payload: [...airTicketsList.sort((a, b) => b.basic_price - a.basic_price)],
});

export const orderByFastestDeparture = (airTicketsList) => ({
	type: AirTicketsTypes.ORDER_BY_FASTEST_DEPARTURE,
	payload: [...airTicketsList.sort(orderByFastestTime)],
});

export const changeDeparture = (airport) => ({
	type: AirTicketsTypes.CHANGE_DEPARTURE,
	payload: airport,
});

export const changeArrival = (airport) => ({
	type: AirTicketsTypes.CHANGE_ARRIVAL,
	payload: airport,
});

export const changeToChangeDeparture = (airport) => ({
	type: AirTicketsTypes.CHANGE_TO_CHANGE_DEPARTURE,
	payload: airport,
});

export const changeToChangeArrival = (airport) => ({
	type: AirTicketsTypes.CHANGE_TO_CHANGE_ARRIVAL,
	payload: airport,
});

export const changeDepartureDate = (date) => ({
	type: AirTicketsTypes.CHANGE_DEPARTURE_DATE,
	payload: changeDateFormatForFetching(date),
});

export const changeArrivalDate = (date) => ({
	type: AirTicketsTypes.CHANGE_ARRIVAL_DATE,
	payload: changeDateFormatForFetching(date),
});

export const getPassengerAmount = (passengerAmount) => ({
	type: AirTicketsTypes.GET_PASSENGER_AMOUNT,
	payload: passengerAmount,
});

export const getAdultAmount = (adultAmount) => ({
	type: AirTicketsTypes.GET_ADULT_AMOUNT,
	payload: adultAmount,
});

export const getChildAmount = (childAmount) => ({
	type: AirTicketsTypes.GET_CHILD_AMOUNT,
	payload: childAmount,
});

export const getBabyAmount = (babyAmount) => ({
	type: AirTicketsTypes.GET_BABY_AMOUNT,
	payload: babyAmount,
});

export const getAirlineList = (airTicketsList) => ({
	type: AirTicketsTypes.GET_AIRLINE_LIST,
	payload: airTicketsList,
});

export const getSeatClassList = (airTicketsList) => ({
	type: AirTicketsTypes.GET_SEAT_CLASS_LIST,
	payload: airTicketsList,
});

export const getSeatType = (seatType) => ({
	type: AirTicketsTypes.GET_SEAT_TYPE,
	payload: seatType,
});

export const getTimeList = (timeList) => ({
	type: AirTicketsTypes.GET_TIME_LIST,
	payload: timeList,
});

export const getDepartureTicket = (ticket) => ({
	type: AirTicketsTypes.GET_DEPARTURE_TICKET,
	payload: ticket,
});

export const getArrivalTicket = (ticket) => ({
	type: AirTicketsTypes.GET_ARRIVAL_TICKET,
	payload: ticket,
});

export const clearTicket = () => ({
	type: AirTicketsTypes.CLEAR_TICKET,
});

export const getAirlineListCheckBox = (checkboxList) => ({
	type: AirTicketsTypes.GET_AIRLINE_LIST_CHECKBOX,
	payload: checkboxList,
});

export const getSeatClassListCheckBox = (checkboxList) => ({
	type: AirTicketsTypes.GET_SEAT_CLASS_LIST_CHECKBOX,
	payload: checkboxList,
});

export const searchButtonClick = () => ({
	type: AirTicketsTypes.SEARCH_BUTTON_CLICK,
});

export const airlineSelectionClick = () => ({
	type: AirTicketsTypes.AIRLINE_SELECTION_CLICK,
});

export const getFinalTotalAmount = () => ({
	type: AirTicketsTypes.GET_FINAL_TOTAL_AMOUNT,
});
