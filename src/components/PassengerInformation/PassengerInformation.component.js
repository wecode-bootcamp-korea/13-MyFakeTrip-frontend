import React from 'react';
import { connect } from 'react-redux';

import PassengerElement from '../PassengerElement/PassengerElement.component';
import PassengerWarning from '../PassengerWarning/PassengerWarning.component';

import { PassengerInformationContainer } from './PassengerInformation.styles';

const PassengerInformation = ({ adultAmount, childAmount, babyAmount }) => {
	return (
		<PassengerInformationContainer>
			<span className="passenger-text">탑승객 정보</span>
			{Array.from({ length: adultAmount }, (_, key) => (
				<PassengerElement key={key} adult />
			))}
			{Array.from({ length: childAmount }, (_, key) => (
				<PassengerElement key={key} child />
			))}
			{Array.from({ length: babyAmount }, (_, key) => (
				<PassengerElement key={key} />
			))}
			<PassengerWarning />
		</PassengerInformationContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	adultAmount: airTickets.adultAmount,
	childAmount: airTickets.childAmount,
	babyAmount: airTickets.babyAmount,
});

export default connect(mapStateToProps)(PassengerInformation);
