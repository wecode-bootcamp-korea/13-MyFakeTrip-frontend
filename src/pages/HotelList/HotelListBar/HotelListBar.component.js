import React, { useState } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

import theme from '../../../theme';
import CountPerson from './CountPerson/CountPerson.component';
import Region from './Region/Region.component';

let onOff;

const HotelListBar = ({
	countData,
	onDecrease,
	onIncrease,
	onRegion,
	regionData,
	regionArrData,
}) => {
	// const [value, setValue] = useState('');

	// const handleValue = (e) => {
	// 	setValue(e.target.value);
	// };

	const handleIncrease = (e) => {
		onIncrease(e);
	};

	const handleDecrease = (e) => {
		onDecrease(e);
	};

	const handleRegion = (e) => {
		onRegion(e);
	};

	const [onOffState, setOnOff] = useState({ onOff: false });

	const handleOnOffBtn = () => {
		onOff = onOffState;
		setOnOff({ ...onOff, onOff: !onOffState.onOff });
	};

	let person = `총 ${countData.adultCount + countData.childCount} 명`;

	console.log(onOffState.onOff);

	return (
		<ThemeProvider theme={theme}>
			<SearchBar>
				<Container>
					<label>
						<i className="fas fa-map-marker-alt" />
						<input value={regionData} />
						<Region
							onRegion={handleRegion}
							regionData={regionData}
							regionArrData={regionArrData}
						/>
					</label>
					<label>
						<DateRangePicker
							initialSettings={{
								startDate: '11/15/2020',
								endDate: '11/20/2020',
							}}
						>
							<input />
						</DateRangePicker>
					</label>
					<label>
						<i className="far fa-user" />
						<input type="text" value={person} />
						<CountPerson
							countData={countData}
							onOffData={onOffState}
							onIncrease={handleIncrease}
							onDecrease={handleDecrease}
						/>
						<div onClick={handleOnOffBtn}>
							<OnOffDiv onOff={onOffState.onOff}>
								<i className="fas fa-angle-down" />
							</OnOffDiv>
							<OnOffDiv onOff={!onOffState.onOff}>
								<i className="fas fa-angle-up" />
							</OnOffDiv>
						</div>
					</label>
					<Button>검색</Button>
				</Container>
			</SearchBar>
		</ThemeProvider>
	);
};

export default HotelListBar;

const SearchBar = styled.div`
	background-color: ${(props) => props.theme.mainColor};
`;

const Container = styled.div`
	width: 70%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	label {
		display: flex;
		position: relative;
		align-items: center;
		margin: 8px 0;
		height: 48px;
		border-radius: 4px;
		background-color: white;
		flex: 2;
		outline: none;
		&:hover {
			border: 1px solid #e2dede;
		}
		&:nth-child(2) {
			margin: 8px 5px;
		}
		i {
			padding: 0 18px;
			font-size: 24px;
			background-color: white;
		}
		input {
			border: none;
			outline: none;
			font-size: 16px;
			flex: 3;
		}
	}
`;

const Button = styled.button`
	margin: 8px 0 8px 5px;
	border-radius: 8px;
	border: 0px;
	background-color: #f8a5c2;
	height: 48px;
	font-weight: 600;
	font-size: 18px;
	color: var(--color-theme);
	flex: 0.6;
`;

const OnOffDiv = styled.div`
	display: ${(props) => (props.onOff ? 'none' : 'block')};
`;
