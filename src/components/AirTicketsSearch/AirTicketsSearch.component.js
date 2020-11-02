import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

import {
	changeToChangeDeparture,
	changeToChangeArrival,
	changeDepartureDate,
	changeArrivalDate,
	changeDeparture,
	changeArrival,
	fetchAirTicketsDataStart,
	clearTicket,
	getPassengerAmount,
	getAdultAmount,
	getChildAmount,
	getBabyAmount,
	getSeatType,
	searchButtonClick,
} from '../../redux/airTickets/airTickets.actions';

import ItineraryModalContainer from '../ItinerarayModalContainer/ItineraryModalContainer.component';
import PassengSubContent from '../PassengerSubContent/PassengerSubContent.component';

import {
	AirTicketsSearchContainer,
	SearchContainer,
} from './AirTicketsSearch.styles';

const AirTicketsSearch = ({
	toChangeDeparture,
	toChangeArrival,
	changeDepartureDate,
	changeArrivalDate,
	changeToChangeDeparture,
	changeToChangeArrival,
	departureDate,
	arrivalDate,
	changeArrival,
	changeDeparture,
	fetchAirTicketsDataStart,
	clearTicket,
	getPassengerAmount,
	getAdultAmount,
	getChildAmount,
	getBabyAmount,
	getSeatType,
	passengerNum,
	adultNum,
	childNum,
	babyNum,
	seat,
	searchButtonClick,
}) => {
	const [passengerSubContentHidden, setPassengerSubContentHidden] = useState(
		true,
	);
	const [passengerAmount, setPassengerAmount] = useState(0);
	const [adultAmount, setAdultAmount] = useState(0);
	const [childAmount, setChildAmount] = useState(0);
	const [babyAmount, setBabyAmount] = useState(0);
	const [modalHidden, setModalHidden] = useState(true);
	const [seatSelection, setSeatSelection] = useState([
		false,
		false,
		false,
		true,
	]);

	const seatTypeName = ['할인석', '일반석', '비즈니스석', '전체'];

	const [locationTarget, setLocationTarget] = useState(null);
	const [seatType, setSeatType] = useState(
		seatTypeName[seatSelection.indexOf(true)],
	);

	useEffect(() => setSeatType(seatTypeName[seatSelection.indexOf(true)]), [
		seatSelection,
	]);
	useEffect(() => {
		setPassengerAmount(adultAmount + childAmount + babyAmount);
	}, [adultAmount, childAmount, babyAmount]);
	useEffect(() => {
		setPassengerAmount(passengerNum);
		setAdultAmount(adultNum);
		setChildAmount(childNum);
		setBabyAmount(babyNum);
		setSeatType(seat);
	}, []);

	const changeLocation = (e) => {
		if (locationTarget === toChangeDeparture)
			changeToChangeDeparture(e.target.innerText);
		else changeToChangeArrival(e.target.innerText);
		setModalHidden(!modalHidden);
	};

	const getSelection = (num) => {
		const selectionArray = Array(4)
			.fill()
			.map((_, idx) => idx === num);
		setSeatSelection(selectionArray);
	};

	const changeTargetAmount = (increase, targetAmount, targetFunction) => {
		if (targetAmount === 0 && !increase) return;
		increase
			? targetFunction(targetAmount + 1)
			: targetFunction(targetAmount - 1);
	};

	const changeLocations = () => {
		changeDeparture(toChangeDeparture);
		changeArrival(toChangeArrival);
		clearTicket();
		getPassengerAmount(passengerAmount);
		getAdultAmount(adultAmount);
		getChildAmount(childAmount);
		getBabyAmount(babyAmount);
		getSeatType(seatType);
		fetchAirTicketsDataStart();
		searchButtonClick();
	};

	const checkSearchAvailability = async () => {
		await changeLocations();
		window.location.reload();
	};

	const swapDepartureAndArrival = () => {
		const temp = toChangeDeparture;
		changeToChangeDeparture(toChangeArrival);
		changeToChangeArrival(temp);
	};

	const changeDateFormatForRangePicker = (date) => {
		date = date.split('-');
		const tmp = date.shift();
		date.push(tmp);
		return date.join('/');
	};

	const changeDateResultToKR = (e) => {
		const [start, end] = e.target.value.split(' - ');
		changeDepartureDate(start);
		changeArrivalDate(end);
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

	useEffect(() => {
		document.querySelector('.form-control').value = changeDateResult(
			changeDateFormatForRangePicker(departureDate) +
				' - ' +
				changeDateFormatForRangePicker(arrivalDate),
		);
	}, []);

	return (
		<AirTicketsSearchContainer>
			<div className="title">
				<span>왕복</span>
			</div>
			<SearchContainer>
				<div className="travel">
					<div
						className="departure"
						onClick={() => {
							setLocationTarget(toChangeDeparture);
							setModalHidden(!modalHidden);
						}}
					>
						<span>{toChangeDeparture}</span>
					</div>
					<div className="change">
						<button onClick={swapDepartureAndArrival}>
							<i className="fas fa-exchange-alt" />
						</button>
					</div>
					<div
						className="arrival"
						onClick={() => {
							setLocationTarget(toChangeArrival);
							setModalHidden(!modalHidden);
						}}
					>
						<span>{toChangeArrival}</span>
					</div>
				</div>
				<div className="date-container">
					<DateRangePicker
						initialSettings={{
							startDate: changeDateFormatForRangePicker(departureDate),
							endDate: changeDateFormatForRangePicker(arrivalDate),
							autoApply: true,
						}}
						onApply={changeDateResultToKR}
					>
						<input type="text" className="form-control" />
					</DateRangePicker>
				</div>
				<div
					className="passenger"
					onClick={() =>
						setPassengerSubContentHidden(!passengerSubContentHidden)
					}
				>
					<i className="far fa-user" />
					<span>
						승객 {passengerAmount}명, {seatType}
					</span>
					<i className="fas fa-angle-down" />
				</div>
				{!passengerSubContentHidden && (
					<PassengSubContent
						setPassengerSubContentHidden={setPassengerSubContentHidden}
						passengerSubContentHidden={passengerSubContentHidden}
						changeTargetAmount={changeTargetAmount}
						setAdultAmount={setAdultAmount}
						adultAmount={adultAmount}
						setChildAmount={setChildAmount}
						childAmount={childAmount}
						setBabyAmount={setBabyAmount}
						babyAmount={babyAmount}
						seatSelection={seatSelection}
						getSelection={getSelection}
					/>
				)}
				<button className="search-button" onClick={checkSearchAvailability}>
					<span>검색</span>
				</button>
			</SearchContainer>
			<ItineraryModalContainer
				modalHidden={modalHidden}
				setModalHidden={setModalHidden}
				changeLocation={changeLocation}
			/>
		</AirTicketsSearchContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	toChangeDeparture: airTickets.toChangeDeparture,
	toChangeArrival: airTickets.toChangeArrival,
	departureDate: airTickets.departureDate,
	arrivalDate: airTickets.arrivalDate,
	passengerNum: airTickets.passengerAmount,
	adultNum: airTickets.adultAmount,
	childNum: airTickets.childAmount,
	babyNum: airTickets.babyAmount,
	seat: airTickets.seatType,
});

export default connect(mapStateToProps, {
	changeDepartureDate,
	changeArrivalDate,
	changeToChangeDeparture,
	changeToChangeArrival,
	changeArrival,
	changeDeparture,
	fetchAirTicketsDataStart,
	clearTicket,
	getPassengerAmount,
	getAdultAmount,
	getChildAmount,
	getBabyAmount,
	getSeatType,
	searchButtonClick,
})(AirTicketsSearch);
