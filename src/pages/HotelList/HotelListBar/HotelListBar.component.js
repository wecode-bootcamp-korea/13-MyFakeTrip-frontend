import React, { useState, useEffect } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import DateRangePicker from 'react-bootstrap-daterangepicker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

import theme from '../../../theme';
import CountPerson from './CountPerson/CountPerson.component';
import Region from './Region/Region.component';

let onOff, onOffBtn;

const HotelListBar = ({
	countData,
	onDecrease,
	onIncrease,
	onRegion,
	regionData,
	regionArrData,
	cityArrData,
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

	const [fixDate, setFixDate] = useState();

	const [onOffState, setOnOff] = useState({ onOff: false });

	const [onOffRegion, setOnOffRegion] = useState({ onOff: false });

	const changeDateResultToKR = (e) => {
		const [start, end] = e.target.value.split(' - ');
		const startSplit = start.split('/');
		const endSplit = end.split('/');
		const dateText = ['월', '일', '년'];
		e.target.value = dateText
			.reduce(
				([start, end], cur, idx) => {
					const nextStart = start + startSplit[idx] + cur;
					const nextEnd = end + endSplit[idx] + cur;
					return [nextStart, nextEnd];
				},
				['', ''],
			)
			.join(' - ');
	};

	const changeDateResult = (str) => {
		const [start, end] = str.split(' - ');
		const startSplit = start.split('/');
		const endSplit = end.split('/');
		const dateText = ['월', '일', '년'];
		return dateText
			.reduce(
				([start, end], cur, idx) => {
					const nextStart = start + startSplit[idx] + cur;
					const nextEnd = end + endSplit[idx] + cur;
					return [nextStart, nextEnd];
				},
				['', ''],
			)
			.join(' - ');
	};

	const changeDateForRangePicker = (str) => {
		const [start, end] = str.split(' - ');
		const startSplit = start.split('/');
		const endSplit = end.split('/');
		const ko = ['월', '일', '년'];
		return (
			startSplit.reduce((acc, cur, idx) => acc + cur + ko[idx], '') +
			' - ' +
			endSplit.reduce((acc, cur, idx) => acc + cur + ko[idx], '')
		);
	};

	useEffect(() => {
		document.querySelector('.hotel-date').value = changeDateForRangePicker(
			document.querySelector('.hotel-date').value,
		);
	}, []);

	const handleOnOffBtn = () => {
		onOff = onOffState;
		setOnOff({ ...onOff, onOff: !onOffState.onOff });
	};

	const handleOnOffRegion = () => {
		onOffBtn = onOffRegion;
		setOnOffRegion({ ...onOffBtn, onOff: !onOffBtn.onOff });
	};

	let person = `총 ${countData.adultCount + countData.childCount} 명`;

	return (
		<ThemeProvider theme={theme}>
			<SearchBar>
				<Container>
					<label>
						<i className="fas fa-map-marker-alt" />
						<input value={regionData} />
						<Region
							onRegion={handleRegion}
							onOffData={onOffRegion}
							regionData={regionData}
							regionArrData={regionArrData}
							cityArrData={cityArrData}
						/>
						<div onClick={handleOnOffRegion}>
							<OnOffDiv onOff={onOffRegion.onOff}>
								<i className="fas fa-angle-down" />
							</OnOffDiv>
							<OnOffDiv onOff={!onOffRegion.onOff}>
								<i className="fas fa-angle-up" />
							</OnOffDiv>
						</div>
					</label>
					<label>
						<DateRangePicker onApply={changeDateResultToKR}>
							<input className="hotel-date" />
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
	width: 1140px;
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

			&.hotel-date {
				text-align: center;
			}
		}
	}
`;

const Button = styled.button`
	margin: 8px 0 8px 5px;
	border-radius: 8px;
	border: 0px;
	background-color: white;
	height: 48px;
	font-weight: 600;
	font-size: 18px;
	color: var(--color-theme);
	flex: 0.6;
`;

const OnOffDiv = styled.div`
	display: ${(props) => (props.onOff ? 'none' : 'block')};
`;
