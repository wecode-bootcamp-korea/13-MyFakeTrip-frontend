import React from 'react';
import { connect } from 'react-redux';

import ItinerarySummary from '../ItinerarySummary/ItinerarySummary.component';
import ItineraryInformation from '../ItineraryInformation/ItineraryInformation.component';

import { ItineraryContainer } from './Itinerary.styles';

const Itinerary = ({ departureTicket, arrivalTicket }) => {
	return (
		<ItineraryContainer>
			<ItinerarySummary ticket={departureTicket} />
			<ItinerarySummary ticket={arrivalTicket} />
			<ItineraryInformation />
		</ItineraryContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	departureTicket: airTickets.departureTicket,
	arrivalTicket: airTickets.arrivalTicket,
});

export default connect(mapStateToProps)(Itinerary);
