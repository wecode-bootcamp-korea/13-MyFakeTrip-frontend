import React from 'react';

import styled from 'styled-components';

const roomStyle = [
	'스탠다드 더블룸',
	'스탠다드 트윈룸',
	'디럭스 더블룸',
	'디럭스 트윈룸',
	'스위트룸',
];

const CheckRoomStyle = (props) => (
	<>
		{roomStyle.map((item, idx) => (
			<CheckBox key={idx}>
				<input type="checkbox" />
				<span></span>
				{item}
			</CheckBox>
		))}
	</>
);

export default CheckRoomStyle;

const CheckBox = styled.label`
	display: flex;
	margin-top: 8px;
	position: relative;
	left: -5px;
	align-items: center;
	cursor: pointer;
	font-size: 18px;
	input {
		opacity: 0;
	}
	input:checked ~ span {
		background-color: #2196f3;
	}
	input:checked ~ span:after {
		display: block;
	}
	span {
		display: block;
		height: 20px;
		width: 20px;
		border: 1px solid #ccc;
		margin-right: 16px;
	}
	span:after {
		display: none;
		position: relative;
		right: -6px;
		bottom: 5px;
		content: '';
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		transform: rotate(45deg);
	}
`;
