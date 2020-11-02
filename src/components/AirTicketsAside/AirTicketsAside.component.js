import React, { useState } from 'react';

import './AirTicketsAside.styles.scss';

const AirTicketsAside = () => {
	const toggleArrow = (e) => {
		const iconElement = e.target;
		iconElement.className =
			iconElement.className === 'fas fa-angle-up'
				? 'fas fa-angle-down'
				: 'fas fa-angle-up';
		const informationElement = e.target.parentNode.nextSibling;
		informationElement.classList.toggle('active');
	};

	return (
		<div className="AirTicketsAside">
			<div className="airlines">
				<div className="title">
					<span>항공사</span>
					<i className="fas fa-angle-up" onClick={toggleArrow}></i>
				</div>
				<div className="information">
					<div className="selection">
						<span>모두 선택</span>
						<span>모두 해제</span>
					</div>
					<div className="airline-list">
						<div className="airline-element">
							<input type="checkbox" />
							<span>진에어</span>
						</div>
						<div className="airline-element">
							<input type="checkbox" />
							<span>진에어</span>
						</div>
					</div>
				</div>
			</div>
			<div className="time">
				<div className="title">
					<span>출발시간</span>
					<i className="fas fa-angle-up" onClick={toggleArrow}></i>
				</div>
				<div className="information">
					<div className="time-list">
						<div className="time-element">
							<input type="checkbox" />
							<span>새벽 00:00~06:00</span>
						</div>
						<div className="time-element">
							<input type="checkbox" />
							<span>새벽 00:00~06:00</span>
						</div>
					</div>
				</div>
			</div>
			<div className="seat">
				<div className="title">
					<span>좌석종류</span>
					<i className="fas fa-angle-up" onClick={toggleArrow}></i>
				</div>
				<div className="information">
					<div className="seat-list">
						<div className="seat-element">
							<input type="checkbox" />
							<span>할인석</span>
						</div>
						<div className="seat-element">
							<input type="checkbox" />
							<span>일반석</span>
						</div>
					</div>
				</div>
			</div>
			<div className="price-range">
				<div className="title">
					<span>가격대</span>
					<i className="fas fa-angle-up" onClick={toggleArrow}></i>
				</div>
				<div className="information">
					<input type="range" min="0" max="100000" />
				</div>
			</div>
		</div>
	);
};

export default AirTicketsAside;
