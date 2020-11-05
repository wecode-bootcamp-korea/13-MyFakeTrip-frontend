import React from 'react';

import styled from 'styled-components';

const starBox = [
	'⭐️⭐️⭐️⭐️⭐️',
	'⭐️⭐️⭐️⭐️',
	'⭐️⭐️⭐️',
	'⭐️⭐️',
	'⭐️',
];

const CheckStarRating = ({ onStarCheck }) => {
	const handleStarCheck = (e) => {
		onStarCheck(e);
	};

	return (
		<>
			{starBox.map((item, idx) => {
				return (
					<CheckBox key={idx}>
						<input type="checkbox" onClick={handleStarCheck} name="fiveStar" />
						<span></span>
						{item}
					</CheckBox>
				);
			})}
		</>
	);
};
export default CheckStarRating;

const CheckBox = styled.label`
	display: flex;
	margin: 8px 0;
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
