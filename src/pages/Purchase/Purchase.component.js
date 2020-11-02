import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import PriceElement from '../../components/PriceElement/PriceElement.component';
import ReservationContainer from '../../components/ReservationContainer/ReservationContainer.component';
import PassengerInformation from '../../components/PassengerInformation/PassengerInformation.component';
import PriceCheckContainer from '../../components/PriceCheckContainer/PriceCheckContainer.component';
import CreditCard from '../../components/CreditCard/CreditCard.component';
import AirTicketsItinerary from '../../components/AirTicketsItinerary/AirTicketsItinerary.component';

import HotelInformation from '../../components/HotelInformation/HotelInformation.component';

import { PurchaseContainer } from './Purchase.styles';

const purchasPageTopInformation = {
	airtickets: <AirTicketsItinerary />,
	hotels: <HotelInformation />,
};

function Purchase({ match, adultAmount, childAmount }) {
	const { purchase_type } = match.params;
	return (
		<PurchaseContainer>
			<div className="purchase-container">
				<div className="purchase-information-container">
					{purchasPageTopInformation[purchase_type]}
					<ReservationContainer />
					{purchase_type === 'airtickets' && (
						<>
							<PassengerInformation />
							<PriceCheckContainer />
						</>
					)}
					<CreditCard />
				</div>
				{purchase_type === 'airtickets' && (
					<div className="price-container">
						{adultAmount && <PriceElement adult amount={adultAmount} />}
						{childAmount && <PriceElement amount={childAmount} />}
					</div>
				)}
			</div>
		</PurchaseContainer>
	);
}

const mapStateToProps = ({ airTickets }) => ({
	adultAmount: airTickets.adultAmount,
	childAmount: airTickets.childAmount,
});

export default withRouter(connect(mapStateToProps)(Purchase));
