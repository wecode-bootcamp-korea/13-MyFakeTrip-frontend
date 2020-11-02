import React from 'react';

import './TicketElement.styles.scss';

const TicketElement = () => {
	return (
		<div className="TicketElement">
			<div className="airline-information-container">
				<img
					src="https://www.webdesignerdepot.com/cdn-origin/uploads/2009/03/aircanada.gif"
					alt="logo"
				/>
				<div className="airline">
					<span>진에어</span>
					<span>LJ343</span>
				</div>
			</div>
			<div className="time-information-container">
				<div className="departure">
					<span>19:15</span>
					<span>GMP</span>
				</div>
				<div className="time">
					<i className="fas fa-long-arrow-alt-right" />
					<span>1시간 0분</span>
				</div>
				<div className="arrival">
					<span>19:15</span>
					<span>GMP</span>
				</div>
			</div>
			<div className="seat">
				<span className="seat-type">할인석</span>
				<span className="remaing-seat">9석</span>
			</div>
			<div className="price">
				<span>39,900원</span>
			</div>
			<button>선택</button>
		</div>
	);
};

export default TicketElement;
