import AirTicketsTypes from './airTickets.types';
import {
	filterOutAirlineList,
	filterOutSeatClassList,
	calculateFinalTotalAmount,
} from './airTickets.utils';

const INITIAL_STATE = {
	airTicketsList: null,
	departure: '김포',
	arrival: '청주',
	toChangeDeparture: '김포',
	toChangeArrival: '청주',
	departureDate: '2020-11-18',
	arrivalDate: '2020-11-19',
	airlineList: null,
	seatClassList: null,
	timeList: [
		'새벽 00:00~06:00',
		'오전 06:00~12:00',
		'오후 12:00~18:00',
		'야간 18:00~24:00',
	],
	loading: true,
	passengerAmount: 0,
	adultAmount: 0,
	childAmount: 0,
	babyAmount: 0,
	seatType: null,
	departureTicket: null,
	arrivalTicket: null,
	airlineListCheckbox: null,
	seatClassListCheckbox: null,
	searchButtonClick: true,
	finalTotalAmount: 0,
};

const airTicketsReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case AirTicketsTypes.GET_AIRTICKETS_DATA:
			return {
				...state,
				airTicketsList: payload,
			};
		case AirTicketsTypes.FETCH_AIRTICKETS_DATA_SUCCESS:
			return {
				...state,
				loading: false,
			};
		case AirTicketsTypes.FETCH_AIRTICKETS_DATA_START:
			return {
				...state,
				loading: true,
			};
		case AirTicketsTypes.ORDER_BY_LOWEST_PRICE:
		case AirTicketsTypes.ORDER_BY_HIGHEST_PRICE:
		case AirTicketsTypes.ORDER_BY_FASTEST_DEPARTURE:
			return {
				...state,
				airTicketsList: payload,
			};
		case AirTicketsTypes.CHANGE_DEPARTURE:
			return {
				...state,
				departure: payload,
			};
		case AirTicketsTypes.CHANGE_ARRIVAL:
			return {
				...state,
				arrival: payload,
			};
		case AirTicketsTypes.CHANGE_DEPARTURE_DATE:
			return {
				...state,
				departureDate: payload,
			};
		case AirTicketsTypes.CHANGE_ARRIVAL_DATE:
			return {
				...state,
				arrivalDate: payload,
			};
		case AirTicketsTypes.CHANGE_TO_CHANGE_DEPARTURE:
			return {
				...state,
				toChangeDeparture: payload,
			};
		case AirTicketsTypes.CHANGE_TO_CHANGE_ARRIVAL:
			return {
				...state,
				toChangeArrival: payload,
			};
		case AirTicketsTypes.GET_PASSENGER_AMOUNT:
			return {
				...state,
				passengerAmount: payload,
			};
		case AirTicketsTypes.GET_ADULT_AMOUNT:
			return {
				...state,
				adultAmount: payload,
			};
		case AirTicketsTypes.GET_CHILD_AMOUNT:
			return {
				...state,
				childAmount: payload,
			};
		case AirTicketsTypes.GET_BABY_AMOUNT:
			return {
				...state,
				babyAmount: payload,
			};
		case AirTicketsTypes.GET_SEAT_TYPE:
			return {
				...state,
				seatType: payload,
			};
		case AirTicketsTypes.GET_AIRLINE_LIST:
			return {
				...state,
				airlineList: filterOutAirlineList(payload),
			};
		case AirTicketsTypes.GET_SEAT_CLASS_LIST:
			return {
				...state,
				seatClassList: filterOutSeatClassList(payload),
			};
		case AirTicketsTypes.GET_TIME_LIST:
			return {
				...state,
				timeList: payload,
			};
		case AirTicketsTypes.GET_DEPARTURE_TICKET:
			return {
				...state,
				departureTicket: payload,
			};
		case AirTicketsTypes.GET_ARRIVAL_TICKET:
			return {
				...state,
				arrivalTicket: payload,
			};
		case AirTicketsTypes.CLEAR_TICKET:
			return {
				...state,
				departureTicket: null,
				arrivalTicket: null,
			};
		case AirTicketsTypes.GET_AIRLINE_LIST_CHECKBOX:
			return {
				...state,
				airlineListCheckbox: payload,
			};
		case AirTicketsTypes.GET_SEAT_CLASS_LIST_CHECKBOX:
			return {
				...state,
				seatClassListCheckbox: payload,
			};
		case AirTicketsTypes.SEARCH_BUTTON_CLICK:
			return {
				...state,
				searchButtonClick: true,
			};
		case AirTicketsTypes.AIRLINE_SELECTION_CLICK:
			return {
				...state,
				searchButtonClick: false,
			};
		case AirTicketsTypes.GET_FINAL_TOTAL_AMOUNT:
			return {
				...state,
				finalTotalAmount: calculateFinalTotalAmount(
					Number(state.arrivalTicket.basic_price) +
						Number(state.departureTicket.basic_price),
					state.adultAmount,
					(Number(state.arrivalTicket.basic_price) +
						Number(state.departureTicket.basic_price)) *
						0.5,
					state.childAmount,
				),
			};
		default:
			return state;
	}
};

export default airTicketsReducer;
