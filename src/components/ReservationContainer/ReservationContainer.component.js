import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import ReservationWarning from '../ReservationWarning/ReservationWarning.component';

import { Reservation } from './ReservationContainer.styles';

const ReservationContainer = ({ match }) => {
	const [emailCompany, setEmailCompany] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');

	const emailCompanyInputChange = (e) => {
		setEmailCompany(e.target.value);
	};

	const emailInputChange = (e) => {
		setEmailInput(e.target.value);
	};

	const nameInputChange = (e) => {
		setName(e.target.value);
	};

	const phoneInputChange = (e) => {
		setPhone(e.target.value);
	};

	const { purchase_type } = match.params;

	return (
		<Reservation>
			<span className="reservation-text">예약자 정보</span>
			<div className="reservation">
				<div className="name">
					<span>예약자 이름</span>
					<input type="text" onChange={nameInputChange} />
				</div>
				<div className="email">
					<span>이메일 주소</span>
					<div className="email-input">
						<input type="text" onChange={emailInputChange} />@
						<input
							type="text"
							value={emailCompany}
							onChange={emailCompanyInputChange}
						/>
						<select value={emailCompany} onChange={emailCompanyInputChange}>
							<option value="">직접 입력</option>
							<option value="hanmail.net">hanmail.net</option>
							<option value="naver.com">naver.com</option>
							<option value="nate.com">nate.com</option>
							<option value="gmail.com">gmail.com</option>
						</select>
					</div>
				</div>
				<div className="phone">
					<span>휴대전화 번호</span>
					<div className="phone-input">
						<input type="text" onChange={phoneInputChange} />
					</div>
				</div>
				{purchase_type === 'airtickets' && (
					<p>
						예약자 정보는 항공사 스케줄 변동 등의 사유로 기재되오니 즉시 연락이
						가능한 연락처 기재 부탁드립니다.
						<br />
						연락처 오기재로 발생되는 불이익에 대해 당사는 책임지지 않사오니 이점
						유의하시기 바랍니다.
					</p>
				)}
			</div>
			{purchase_type === 'airtickets' && <ReservationWarning />}
		</Reservation>
	);
};

export default withRouter(ReservationContainer);
