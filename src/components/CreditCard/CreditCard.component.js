import React from 'react';
import { connect } from 'react-redux';

import {
	CreditCardContainer,
	CreditCardInformationContainer,
} from './CreditCard.styles';

const CreditCard = ({ finalTotalAmount }) => {
	const callback = (response) => {
		const { success, error_msg } = response;

		if (success) {
			alert('결제 성공');
		} else {
			alert(`결제 실패: ${error_msg}`);
		}
	};

	const onClickPayment = () => {
		const { IMP } = window;
		IMP.init('imp21987776');

		const data = {
			pg: 'uplus',
			pay_method: 'card',
			merchant_uid: `mid_${new Date().getTime()}`,
			amount: finalTotalAmount,
			name: 'myFakeTrip Payment',
			buyer_name: '김복자',
			buyer_tel: '01012341234',
			buyer_email: 'bogja@gmail.com',
			buyer_addr: '선릉로',
			buyer_postcode: '06018',
		};

		IMP.request_pay(data, callback);
	};
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
						<span>{finalTotalAmount.toLocaleString()}원</span>
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

const mapStateToProps = ({ airTickets }) => ({
	finalTotalAmount: airTickets.finalTotalAmount,
});

export default connect(mapStateToProps)(CreditCard);
