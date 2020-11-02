import React from 'react';

import Itinerary from '../Itinerary/Itinerary.component';
import AdditionalInformation from '../AdditionalInformation/AdditionalInformation.component';

import { AirTicketsItineraryContainer } from './AirTicketsItinerary.styles';

const AirTicketsItinerary = () => {
	return (
		<AirTicketsItineraryContainer>
			<Itinerary />
			<AdditionalInformation />
		</AirTicketsItineraryContainer>
	);
};

export default AirTicketsItinerary;
