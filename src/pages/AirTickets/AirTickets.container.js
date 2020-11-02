import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
	getAirlineList,
	getSeatClassList,
} from '../../redux/airTickets/airTickets.actions';
import { GO_AIRTICKET_INFO, COME_AIRTICKET_INFO } from '../../config';

import WithLoading from '../../components/WithLoading/WithLoading.component';
import AirTickets from './AirTickets.component';

import {
	fetchAirTicketsDataSuccess,
	getAirTicketsData,
} from '../../redux/airTickets/airTickets.actions';

const AirTicketsWithLoading = WithLoading(AirTickets);

const AirTicketsContainer = ({
	loading,
	getAirTicketsData,
	fetchAirTicketsDataSuccess,
	departure,
	arrival,
	departureDate,
	arrivalDate,
	departureTicket,
	getAirlineList,
	getSeatClassList,
	airlineList,
	airlineListCheckbox,
	searchButtonClick,
}) => {
	const getAllAirTicketData = async (flight) => {
		getAirTicketsData(flight);
		getAirlineList(flight);
		getSeatClassList(flight);
	};

	const checkAdditionalData = () => {
		let retAirline = [];
		airlineList.map((airline, idx) => {
			if (airlineListCheckbox[idx]) retAirline.push(airline);
		});
		let ret = '';
		ret = retAirline.map((airline) => ret + `&airline_list=${airline}`);
		return ret.join('');
	};

	const fetchAirTicketData = async () => {
		if (!departureTicket) {
			let additionalData = '';
			if (airlineList && !searchButtonClick)
				additionalData = checkAdditionalData();
			await fetch(
				`${GO_AIRTICKET_INFO}airport_depart=${departure}&airport_arrive=${arrival}&start_date=${departureDate}&end_date=${arrivalDate}${additionalData}`,
			)
				.then((res) => res.json())
				.then(({ flight_list }) => getAllAirTicketData(flight_list))
				.then(() => fetchAirTicketsDataSuccess());
		} else {
			let additionalData = '';
			if (airlineList && !searchButtonClick)
				additionalData = checkAdditionalData();
			await fetch(
				`${COME_AIRTICKET_INFO}airport_depart=${departure}&airport_arrive=${arrival}&start_date=${departureDate}&end_date=${arrivalDate}${additionalData}`,
			)
				.then((res) => res.json())
				.then(({ flight_list }) => getAllAirTicketData(flight_list))
				.then(() => fetchAirTicketsDataSuccess());
		}
	};

	useEffect(() => {
		fetchAirTicketData();
	}, []);
	return <AirTicketsWithLoading loading={loading} />;
};

const mapStateToProps = ({ airTickets }) => ({
	loading: airTickets.loading,
	departure: airTickets.departure,
	arrival: airTickets.arrival,
	departureDate: airTickets.departureDate,
	arrivalDate: airTickets.arrivalDate,
	departureTicket: airTickets.departureTicket,
	airlineList: airTickets.airlineList,
	airlineListCheckbox: airTickets.airlineListCheckbox,
	searchButtonClick: airTickets.searchButtonClick,
});

export default connect(mapStateToProps, {
	getAirTicketsData,
	fetchAirTicketsDataSuccess,
	getAirlineList,
	getSeatClassList,
})(AirTicketsContainer);
