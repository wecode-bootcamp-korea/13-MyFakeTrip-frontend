import React from 'react';

import TicketElement from '../TicketElement/TicketElement.component';
import SortedInformation from '../SortedInformation/SortedInformation.component';

import './AirTicketsMain.styles.scss';

const AirTicketsMain = () => {
	return (
		<div className="AirTicketsMain">
			<div className="result-header">
				<div className="result-information">
					<span>검색결과 총 2개</span>
					<span>성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)</span>
				</div>
				<div className="result-filter">
					<select>
						<option>가격 낮은 순</option>
						<option>출발 시간 빠른 순</option>
						<option>출발 시간 늦은 순</option>
					</select>
				</div>
			</div>
			<div className="result-list">
				<SortedInformation />
				<div className="result-element-container">
					<TicketElement />
					<TicketElement />
					<TicketElement />
					<TicketElement />
					<TicketElement />
					<TicketElement />
					<TicketElement />
					<TicketElement />
					<TicketElement />
				</div>
			</div>
		</div>
	);
};

export default AirTicketsMain;
