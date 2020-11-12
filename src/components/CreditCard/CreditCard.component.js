import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jQuery from 'jquery';
import Swal from 'sweetalert2';

import { SEND_PURCHASE_INFO } from '../../config';

import {
	CreditCardContainer,
	CreditCardInformationContainer,
} from './CreditCard.styles';

window.$ = window.jQuery = jQuery;

const CreditCard = ({
	airticketPrice,
	hotelPrice,
	departureTicket,
	arrivalTicket,
	passengerAmount,
	history,
	match,
}) => {
	const [purchaseFinalAmount, setPurchaseFinalAmount] = useState(0);
	useEffect(() => {
		const { purchase_type } = match.params;
		if (purchase_type === 'airtickets') setPurchaseFinalAmount(airticketPrice);
		else setPurchaseFinalAmount(hotelPrice);
	}, []);
	const callback = (response) => {
		const { success } = response;

		if (success) {
			fetch(SEND_PURCHASE_INFO, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0fQ.XCYT6I-inwjCTcJqD6mADybAgtuYtDV4HBdShCuZYjk',
				},
				body: JSON.stringify({
					start_flight_id: departureTicket.id,
					end_flight_id: arrivalTicket.id,
					start_date: departureTicket.depart_date,
					end_date: arrivalTicket.depart_date,
					total_people: passengerAmount,
				}),
			})
				.then(async () => {
					await Swal.fire({
						position: 'center',
						icon: 'success',
						title: '결제 완료하였습니다',
						showConfirmButton: false,
						timer: 1500,
					});
					history.push('/');
				})
				.catch((error) => console.log(error));
		} else {
			Swal.fire({
				position: 'center',
				icon: 'warning',
				title: '결제 오류',
				showConfirmButton: false,
				timer: 1500,
			});
		}
	};

	const onClickPayment = () => {
		const { IMP } = window;
		IMP.init('imp21987776');

		const data = {
			pg: 'uplus',
			pay_method: 'card',
			merchant_uid: `mid_${new Date().getTime()}`,
			amount: purchaseFinalAmount,
			name: 'myFakeTrip Payment',
			buyer_name: '김복자',
			buyer_tel: '01012341234',
			buyer_email: 'bogja@gmail.com',
			buyer_addr: '선릉로',
			buyer_postcode: '06018',
		};

		IMP.request_pay(data, callback);
	};
	console.log(purchaseFinalAmount);

	return (
		<CreditCardContainer>
			<div className="title">
				<span>결제 정보</span>
			</div>
			<CreditCardInformationContainer>
				<div className="amount">
					<div className="text">
						<span>결제금액</span>
					</div>
					<div className="content">
						<span>{purchaseFinalAmount.toLocaleString()}원</span>
					</div>
				</div>
				<div className="amount">
					<div className="text">
						<span>신용카드 결제</span>
					</div>
					<div className="content">
						<button onClick={onClickPayment}>결제하기</button>
					</div>
				</div>
			</CreditCardInformationContainer>
		</CreditCardContainer>
	);
};

const mapStateToProps = ({ airTickets, hotels }) => ({
	airticketPrice: airTickets.finalTotalAmount,
	departureTicket: airTickets.departureTicket,
	arrivalTicket: airTickets.arrivalTicket,
	passengerAmount: airTickets.passengerAmount,
	hotelPrice: hotels.totalPrice,
});

export default withRouter(connect(mapStateToProps)(CreditCard));
