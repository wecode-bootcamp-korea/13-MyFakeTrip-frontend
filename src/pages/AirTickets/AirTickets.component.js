import React, { useState } from 'react';

import AirTicketsAside from '../../components/AirTicketsAside/AirTicketsAside.component';
import AirTicketsMain from '../../components/AirTicketsMain/AirTicketsMain.component';

import './AirTickets.styles.scss';

function AirTickets() {
	return (
		<div className="AirTickets">
			<div className="ticket_search_container">
				<div className="ticket_search">
					<span>왕복</span>
					<div className="search"></div>
				</div>
			</div>
			<div className="ticket_list_container">
				<div className="ticket_list_information">
					<AirTicketsAside />
					<AirTicketsMain />
					{/* <div className="ticket_list_main">
						<div className="result-header">
							<div className="result-information">
								<span>검색결과 총 2개</span>
								<span>
									성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)
								</span>
							</div>
							<div className="result-filter">
								<select>
									<option>가격 낮은 순</option>
									<option>출발 시간 빠른 순</option>
									<option>출발 시간 늦은 순</option>
								</select>
							</div>
						</div>
						<div className="result-list"></div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default AirTickets;
