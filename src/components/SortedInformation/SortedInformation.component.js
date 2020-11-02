import React from 'react';
import { connect } from 'react-redux';

import { SortedInformatonContainer } from './SortedInformation.styles';

const SortedInformation = ({
	departure,
	arrival,
	departureTicket,
	departureDate,
	arrivalDate,
}) => {
	return (
		<SortedInformatonContainer>
			<div className="information-container">
				<span className="tag">{!departureTicket ? '가는편' : '오는편'}</span>
				<div className="departure-and-arrival">
					<span>{!departureTicket ? departure : arrival}</span>
					<i className="fas fa-long-arrow-alt-right" />
					<span>{!departureTicket ? arrival : departure}</span>
				</div>
				<span>{!departureTicket ? departureDate : arrivalDate}</span>
			</div>
		</SortedInformatonContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	departure: airTickets.departure,
	arrival: airTickets.arrival,
	departureTicket: airTickets.departureTicket,
	departureDate: airTickets.departureDate,
	arrivalDate: airTickets.arrivalDate,
});

export default connect(mapStateToProps)(SortedInformation);
