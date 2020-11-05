import React, { useState } from 'react';

import styled, { css } from 'styled-components';

const FilterButton = ({ optionData, onConvenienceCheck }) => {
	const [btnState, setBtnState] = useState(false);

	const handleMoreBtn = () => {
		setBtnState(!btnState);
	};

	const handleConvenienceCheck = (e) => {
		onConvenienceCheck(e);
	};

	return (
		<>
			<Button
				onClick={handleConvenienceCheck}
				name="bagCheck"
				onOff={optionData.bagCheck}
			>
				<i className="fas fa-shopping-bag"></i>
				<span>수화물 보관</span>
			</Button>
			<Button
				onClick={handleConvenienceCheck}
				name="breakfast"
				onOff={optionData.breakfast}
			>
				<i className="fas fa-egg"></i>
				<span>조식</span>
			</Button>
			<Button
				onClick={handleConvenienceCheck}
				name="fitness"
				onOff={optionData.fitness}
			>
				<i className="fas fa-bus"></i>
				<span>피트니스</span>
			</Button>
			<Button
				onClick={handleConvenienceCheck}
				name="reseption"
				onOff={optionData.reseption}
			>
				<i className="fas fa-clipboard-check"></i>
				<span>24시 리셉션</span>
			</Button>
			<Button
				onClick={handleConvenienceCheck}
				name="business"
				onOff={optionData.business}
			>
				<i className="fas fa-briefcase" />
				<span>비즈니스시설</span>
			</Button>
			<ExtendButton
				btnState={btnState}
				onClick={handleConvenienceCheck}
				name="laundry"
				onOff={optionData.laundry}
			>
				<i className="fas fa-soap"></i>
				<span>세탁</span>
			</ExtendButton>
			<ExtendButton
				btnState={btnState}
				onClick={handleConvenienceCheck}
				name="restaurant"
				onOff={optionData.restaurant}
			>
				<i className="fas fa-utensils"></i>
				<span>레스토랑</span>
			</ExtendButton>
			<ExtendButton
				btnState={btnState}
				onClick={handleConvenienceCheck}
				name="pool"
				onOff={optionData.pool}
			>
				<i className="fas fa-swimmer"></i>
				<span>수영장</span>
			</ExtendButton>
			<ExtendButton
				btnState={btnState}
				onClick={handleConvenienceCheck}
				name="spa"
				onOff={optionData.spa}
			>
				<i className="fas fa-spa"></i>
				<span>스파</span>
			</ExtendButton>
			<span onClick={handleMoreBtn}>{!btnState ? '더보기 ⌵' : '접기 ⌃'}</span>
		</>
	);
};

export default FilterButton;

const Button = styled.button`
	display: flex;
	align-items: center;
	width: 100%;
	border-radius: 20px;
	border: 1px solid ${(props) => (props.onOff ? '#42a5f5' : '#ccc')};
	margin-top: 8px;
	text-align: start;
	color: ${(props) => (props.onOff ? '#42a5f5' : 'gray')};
	background-color: ${(props) => (props.onOff ? '#bbdefb' : 'white')};
	font-size: 16px;
	font-weight: ${(props) => (props.onOff ? '600' : '400')};
	i {
		width: 18px;
		height: 18px;
		text-align: center;
		margin: 0 16px;
	}
`;

const ExtendButton = styled(Button)`
	${({ btnState }) =>
		!btnState &&
		css`
			display: none;
		`}
`;
