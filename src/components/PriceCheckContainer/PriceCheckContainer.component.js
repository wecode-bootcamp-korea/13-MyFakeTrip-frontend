import React from 'react';
import { connect } from 'react-redux';

import { PriceCheck } from './PriceCheckContainer.styles';

const PriceCheckContainer = ({
	adultAmount,
	babyAmount,
	childAmount,
	departureTicket,
	arrivalTicket,
	finalTotalAmount,
}) => {
	const getTotalAmount = (num, times) => {
		const departureTicketPrice = departureTicket.basic_price * num * times;
		const arrivalTicketPrice = arrivalTicket.basic_price * num * times;
		return Number(departureTicketPrice) + Number(arrivalTicketPrice);
	};

	return (
		<PriceCheck>
			<span>결제 정보 확인</span>
			<div className="price-table">
				<div className="title">
					<span>승객타입</span>
					<span>인원</span>
					<span>항공요금</span>
					<span>유류할증료</span>
					<span>제세공과금</span>
					<span>발권수수료</span>
					<span>총액운임</span>
				</div>
				<div className="adult">
					<span>성인</span>
					<span>{adultAmount}</span>
					<span>{getTotalAmount(adultAmount, 1).toLocaleString()}</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>{getTotalAmount(adultAmount, 1).toLocaleString()}</span>
				</div>
				<div className="child">
					<span>소아</span>
					<span>{childAmount}</span>
					<span>{getTotalAmount(childAmount, 0.5).toLocaleString()}</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>{getTotalAmount(childAmount, 0.5).toLocaleString()}</span>
				</div>
				<div className="baby">
					<span>유아</span>
					<span>{babyAmount}</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
					<span>0</span>
				</div>
			</div>
			<div className="price-result">
				<p>
					<span>총 결제금액</span>
					(항공요금+유류할증료+제세공과금+발권수수료 포함)
				</p>
				<div className="total-price">
					<span>{finalTotalAmount.toLocaleString()}원</span>
				</div>
			</div>
		</PriceCheck>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	adultAmount: airTickets.adultAmount,
	babyAmount: airTickets.babyAmount,
	childAmount: airTickets.childAmount,
	departureTicket: airTickets.departureTicket,
	arrivalTicket: airTickets.arrivalTicket,
	finalTotalAmount: airTickets.finalTotalAmount,
});

export default connect(mapStateToProps)(PriceCheckContainer);
