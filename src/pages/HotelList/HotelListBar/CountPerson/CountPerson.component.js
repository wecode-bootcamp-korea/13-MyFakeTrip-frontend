import React from 'react';

import styled from 'styled-components';

const countBox = ['객실', '성인', '유아'];

const CountPerson = ({ countData, onDecrease, onIncrease, onOffData }) => {
	const handleIncrease = (e) => {
		onIncrease(e);
	};

	const handleDecrease = (e) => {
		onDecrease(e);
	};

	console.log('onOffData =>', onOffData.onOff);

	return (
		<Container onOff={onOffData.onOff}>
			<header>
				<span>객실 및 인원</span>
			</header>
			<ul>
				<li>
					<div>{countBox[0]}</div>
					<div>
						<button name="roomCount" onClick={handleDecrease}>
							-
						</button>
						<span>{countData.roomCount}</span>
						<button name="roomCount" onClick={handleIncrease}>
							+
						</button>
					</div>
				</li>
				<li>
					<div>{countBox[1]}</div>
					<div>
						<button name="adultCount" onClick={handleDecrease}>
							-
						</button>
						<span>{countData.adultCount}</span>
						<button name="adultCount" onClick={handleIncrease}>
							+
						</button>
					</div>
				</li>
				<li>
					<div>{countBox[2]}</div>
					<div>
						<button name="childCount" onClick={handleDecrease}>
							-
						</button>
						<span>{countData.childCount}</span>
						<button name="childCount" onClick={handleIncrease}>
							+
						</button>
					</div>
				</li>
			</ul>
		</Container>
	);
};

export default CountPerson;

const Container = styled.div`
	display: ${(props) => (props.onOff ? 'block' : 'none')};
	width: 240px;
	position: absolute;
	top: 60px;
	right: 0;
	background-color: white;
	z-index: 100;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 4px;
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		span {
			font-weight: 600;
			font-size: 18px;
		}
		i.fa-times {
			margin-right: 4px;
			color: #ccc;
			font-size: 14px;
		}
	}
	ul {
		li {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 12px;
			div {
				font-size: 14px;
				span {
					display: inline-block;
					width: 14px;
					text-align: center;
					font-weight: 600;
					font-size: 12px;
				}
				button {
					font-size: 12px;
					background-color: white;
					border: 1px solid #ccc;
					border-radius: 50%;
					padding: 5px 9px;
				}
			}
		}
	}
`;
