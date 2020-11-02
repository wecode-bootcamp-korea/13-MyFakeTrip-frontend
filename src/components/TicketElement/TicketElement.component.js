import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
	getDepartureTicket,
	getArrivalTicket,
	fetchAirTicketsDataStart,
	getFinalTotalAmount,
} from '../../redux/airTickets/airTickets.actions';

import S from './TicketElement.styles';

const TicketElement = ({
	airTicket,
	getDepartureTicket,
	getArrivalTicket,
	departureTicket,
	fetchAirTicketsDataStart,
	history,
	getFinalTotalAmount,
}) => {
	const {
		airline_url,
		airline,
		flightid,
		depart_time,
		airport_depart_eng,
		arrive_time,
		airport_arrive_eng,
		remain_seats,
		basic_price,
		seat_class,
	} = airTicket;

	const getArrivalOrDepartureTicket = async () => {
		if (!departureTicket) {
			await getDepartureTicket(airTicket);
			await fetchAirTicketsDataStart();
			window.location.reload();
		} else {
			await getArrivalTicket(airTicket);
			await getFinalTotalAmount();
			history.push('/purchase/airtickets');
		}
	};

	return (
		<S.TicketElementContainer>
			<S.AirlineInformationContainer>
				<img src={airline_url} alt="logo" />
				<div className="airline">
					<span>{airline}</span>
					<span>{flightid}</span>
				</div>
			</S.AirlineInformationContainer>
			<S.TimeInformationContainer>
				<div className="departure">
					<span>{depart_time}</span>
					<span>{airport_depart_eng}</span>
				</div>
				<div className="time">
					<i className="fas fa-long-arrow-alt-right" />
					<span>1시간 0분</span>
				</div>
				<div className="arrival">
					<span>{arrive_time}</span>
					<span>{airport_arrive_eng}</span>
				</div>
			</S.TimeInformationContainer>
			<S.SeatContainer>
				<span className="seat-type">{seat_class}</span>
				<span className="remaing-seat">{remain_seats}석</span>
			</S.SeatContainer>
			<S.PriceContainer>
				<span>{(+basic_price).toLocaleString()}원</span>
			</S.PriceContainer>
			<button onClick={getArrivalOrDepartureTicket}>선택</button>
		</S.TicketElementContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	departureTicket: airTickets.departureTicket,
});

export default withRouter(
	connect(mapStateToProps, {
		getDepartureTicket,
		getArrivalTicket,
		fetchAirTicketsDataStart,
		getFinalTotalAmount,
	})(TicketElement),
);
