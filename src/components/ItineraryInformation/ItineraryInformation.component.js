import React from 'react';
import { connect } from 'react-redux';

import DepartureArrivalContainer from '../DepartureArrivalContainer/DepartureArrivalContainer.component';

import { ItineraryInformationContainer } from './ItineraryInformation.styles';

const ItineraryInformation = ({ departureTicket, arrivalTicket }) => {
	const titleArray = ['항공편', '여정', '출발', '도착', '좌석', '수하물'];
	return (
		<ItineraryInformationContainer>
			<div className="top">
				{titleArray.map((titleElement, idx) => (
					<span key={idx}>{titleElement}</span>
				))}
			</div>
			<DepartureArrivalContainer ticket={departureTicket} departure />
			<DepartureArrivalContainer ticket={arrivalTicket} />
		</ItineraryInformationContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	departureTicket: airTickets.departureTicket,
	arrivalTicket: airTickets.arrivalTicket,
});

export default connect(mapStateToProps)(ItineraryInformation);
