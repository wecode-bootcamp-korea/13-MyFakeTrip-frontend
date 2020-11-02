import React from 'react';

import { PassengerSubContentContainer } from './PassengerSubContent.styles';

const PassengerSubContent = ({
	setPassengerSubContentHidden,
	passengerSubContentHidden,
	changeTargetAmount,
	setAdultAmount,
	adultAmount,
	setChildAmount,
	childAmount,
	setBabyAmount,
	babyAmount,
	seatSelection,
	getSelection,
}) => {
	return (
		<PassengerSubContentContainer>
			<div className="top">
				<span>인원 & 좌석등급</span>
				<i
					className="fas fa-times"
					onClick={() =>
						setPassengerSubContentHidden(!passengerSubContentHidden)
					}
				/>
			</div>
			<div className="passenger-amount">
				<div className="adult">
					<div className="information">
						<span>성인</span>
						<span>만 12세 이상</span>
					</div>
					<div className="amount">
						<span
							onClick={() =>
								changeTargetAmount(false, adultAmount, setAdultAmount)
							}
						>
							<i className="fas fa-minus" />
						</span>
						<span>{adultAmount}</span>
						<span
							onClick={() =>
								changeTargetAmount(true, adultAmount, setAdultAmount)
							}
						>
							<i className="fas fa-plus" />
						</span>
					</div>
				</div>
				<div className="child">
					<div className="information">
						<span>소아</span>
						<span>만 12세 미만</span>
					</div>
					<div className="amount">
						<span
							onClick={() =>
								changeTargetAmount(false, childAmount, setChildAmount)
							}
						>
							<i className="fas fa-minus" />
						</span>
						<span>{childAmount}</span>
						<span
							onClick={() =>
								changeTargetAmount(true, childAmount, setChildAmount)
							}
						>
							<i className="fas fa-plus" />
						</span>
					</div>
				</div>
				<div className="baby">
					<div className="information">
						<span>유아</span>
						<span>만 3세 미만</span>
					</div>
					<div className="amount">
						<span
							onClick={() =>
								changeTargetAmount(false, babyAmount, setBabyAmount)
							}
						>
							<i className="fas fa-minus" />
						</span>
						<span>{babyAmount}</span>
						<span
							onClick={() =>
								changeTargetAmount(true, babyAmount, setBabyAmount)
							}
						>
							<i className="fas fa-plus" />
						</span>
					</div>
				</div>
			</div>
			<div className="seat-select">
				<div className="seat-type">
					<input
						type="radio"
						name="seat"
						checked={seatSelection[0]}
						onChange={() => getSelection(0)}
					/>
					<span>할인석</span>
				</div>
				<div className="seat-type">
					<input
						type="radio"
						name="seat"
						checked={seatSelection[1]}
						onChange={() => getSelection(1)}
					/>
					<span>일반석</span>
				</div>
				<div className="seat-type">
					<input
						type="radio"
						name="seat"
						checked={seatSelection[2]}
						onChange={() => getSelection(2)}
					/>
					<span>비즈니스석</span>
				</div>
				<div className="seat-type">
					<input
						type="radio"
						name="seat"
						checked={seatSelection[3]}
						onChange={() => getSelection(3)}
					/>
					<span>전체</span>
				</div>
			</div>
		</PassengerSubContentContainer>
	);
};

export default PassengerSubContent;
