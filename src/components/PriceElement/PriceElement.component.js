import React from 'react';
import { connect } from 'react-redux';

import { PriceElementContainer } from './PriceElement.styles';

const PriceElement = ({
	adult,
	amount,
	arrivalTicket,
	departureTicket,
	finalTotalAmount,
}) => {
	const arrivalPrice = arrivalTicket.basic_price;
	const departurePrice = departureTicket.basic_price;
	const totalPrice = Number(arrivalPrice) + Number(departurePrice);
	const multiplyValue = adult ? 1 : 0.5;
	return (
		<PriceElementContainer>
			<div className="people-information">
				<p>
					{adult ? '성인' : '아동'}
					<span>{amount}</span>명
				</p>
			</div>
			<div className="price-information">
				<div>
					<span>항공요금</span>
					<span>{amount}명</span>
					<span>
						{(totalPrice * amount * multiplyValue).toLocaleString()}원
					</span>
				</div>
				<div>
					<span>유류할증료</span>
					<span>{amount}명</span>
					<span>0원</span>
				</div>
				<div>
					<span>제세공과금</span>
					<span>{amount}명</span>
					<span>0원</span>
				</div>
				<div>
					<span>발권수수료</span>
					<span>{amount}명</span>
					<span>0원</span>
				</div>
			</div>
			<div className="total-price">
				<span> {adult ? '성인' : '아동'} 총 요금</span>
				<span>{(totalPrice * amount * multiplyValue).toLocaleString()}원</span>
			</div>
		</PriceElementContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	departureTicket: airTickets.departureTicket,
	arrivalTicket: airTickets.arrivalTicket,
	finalTotalAmount: airTickets.finalTotalAmount,
});

export default connect(mapStateToProps)(PriceElement);
