import React, { useState, useEffect } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { connect } from 'react-redux';

import {
	getAirlineListCheckBox,
	fetchAirTicketsDataStart,
	airlineSelectionClick,
} from '../../redux/airTickets/airTickets.actions';

import S from './AirTicketsAside.styles';

const AirTicketsAside = ({
	airlineList,
	seatClassList,
	timeList,
	airTicketsList,
	getAirlineListCheckBox,
	fetchAirTicketsDataStart,
	airlineSelectionClick,
}) => {
	const [rangeValue, setRangeValue] = useState(5000);
	const [airlineListCheckBox, setAirlineListCheckBox] = useState([]);
	const [maxAmount, setMaxAmount] = useState(0);

	useEffect(() => {
		if (!airlineList || !airTicketsList) return;
		const tempCheckBox = Array(airlineList.length).fill(true);
		setAirlineListCheckBox(tempCheckBox);
		const maxPrice = airTicketsList.reduce(
			(acc, { basic_price }) => Math.max(acc, basic_price),
			0,
		);
		setMaxAmount(maxPrice);
	}, []);

	const toggleArrow = (e) => {
		const toggleDiv = e.currentTarget;
		const arrowIcon = toggleDiv.children[1];
		arrowIcon.className =
			arrowIcon.className === 'fas fa-angle-up'
				? 'fas fa-angle-down'
				: 'fas fa-angle-up';
		const listContainer = toggleDiv.parentNode.children[1];
		listContainer.classList.toggle('active');
	};

	const toggleCheckbox = async (id) => {
		const tempCheckBox = airlineListCheckBox.map((airline, idx) =>
			idx === id ? !airline : airline,
		);
		await setAirlineListCheckBox(tempCheckBox);
		await getAirlineListCheckBox(tempCheckBox);
		await fetchAirTicketsDataStart();
		await airlineSelectionClick();
		window.location.reload();
	};

	const selectCheckBoxAll = (isAll) => {
		const tempCheckBox = Array(airlineList.length).fill(isAll);
		setAirlineListCheckBox(tempCheckBox);
		getAirlineListCheckBox(tempCheckBox);
	};

	return (
		<S.AirTicketsAsideContainer>
			<S.AirlinesContainer>
				<div className="title" onClick={toggleArrow}>
					<span>항공사</span>
					<i className="fas fa-angle-up" />
				</div>
				<div className="information">
					<div className="selection">
						<span onClick={() => selectCheckBoxAll(true)}>모두 선택</span>
						<span onClick={() => selectCheckBoxAll(false)}>모두 해제</span>
					</div>
					<div className="list">
						{airlineList &&
							airlineList.map((airline, idx) => (
								<div key={idx} className="element">
									<input
										type="checkbox"
										checked={airlineListCheckBox[idx] || false}
										onChange={() => toggleCheckbox(idx)}
									/>
									<span>{airline}</span>
								</div>
							))}
					</div>
				</div>
			</S.AirlinesContainer>
			<S.ContainerElement>
				<div className="title" onClick={toggleArrow}>
					<span>출발시간</span>
					<i className="fas fa-angle-up" />
				</div>
				<div className="information">
					<div className="list">
						{timeList.map((time, idx) => (
							<div key={idx} className="element">
								<input type="checkbox" />
								<span>{time}</span>
							</div>
						))}
					</div>
				</div>
			</S.ContainerElement>
			<S.ContainerElement>
				<div className="title" onClick={toggleArrow}>
					<span>좌석종류</span>
					<i className="fas fa-angle-up" />
				</div>
				<div className="information">
					<div className="list">
						{seatClassList &&
							seatClassList.map((seatClass, idx) => (
								<div key={idx} className="element">
									<input type="checkbox" />
									<span>{seatClass}</span>
								</div>
							))}
					</div>
				</div>
			</S.ContainerElement>
			<S.PriceRangeContainer>
				<div className="title" onClick={toggleArrow}>
					<span>가격대</span>
					<i className="fas fa-angle-up" />
				</div>
				<div className="information">
					<InputRange
						maxValue={maxAmount}
						minValue={0}
						step={10}
						value={rangeValue}
						onChange={(value) => setRangeValue(value)}
					/>
					<span className="range-value">{rangeValue}원</span>
				</div>
			</S.PriceRangeContainer>
		</S.AirTicketsAsideContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	airlineList: airTickets.airlineList,
	seatClassList: airTickets.seatClassList,
	timeList: airTickets.timeList,
	airTicketsList: airTickets.airTicketsList,
});

export default connect(mapStateToProps, {
	getAirlineListCheckBox,
	fetchAirTicketsDataStart,
	airlineSelectionClick,
})(AirTicketsAside);
