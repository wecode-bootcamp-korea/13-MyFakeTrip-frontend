import React from 'react';

import { FaCarSide } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const HotelLoading = (props) => {
	return (
		<Container>
			<p>잠시만 기다려주세요</p>
			<Rotate>
				<div>
					<Car />
				</div>
			</Rotate>
		</Container>
	);
};

export default HotelLoading;

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	position: fixed;
	z-index: 1000;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background-image: url('https://images.unsplash.com/photo-1521071379542-3b741db9f90b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
	background-size: 100% 100%;
	p {
		font-size: 72px;
		font-weight: 600;
		color: white;
	}
	div {
		display: flex;
		position: relative;
		right: 50%;
		width: 30%;
		margin-top: 24px;
		justify-content: center;
	}
`;

const rotate = keyframes`
  0% {
		position:relative;
		left: 0;
  }
	100%{
		position:relative;
		left: 30%;
	}
`;

const Rotate = styled.div`
	display: inline-block;
	animation: ${rotate} 2s linear infinite;
	margin-top: 40px;
	img {
		width: 120px;
	}
`;

const Car = styled(FaCarSide)`
	width: 80px;
	height: 80px;
	color: white;
`;
