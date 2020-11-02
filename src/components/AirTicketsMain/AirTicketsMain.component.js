import React from 'react';
import { connect } from 'react-redux';

import {
	orderByLowestPrice,
	orderByHighestPrice,
	orderByFastestDeparture,
} from '../../redux/airTickets/airTickets.actions';

import TicketElement from '../TicketElement/TicketElement.component';
import SortedInformation from '../SortedInformation/SortedInformation.component';

import S from './AirTicketsMain.styles';

const AirTicketsMain = ({
	airTicketsList,
	orderByLowestPrice,
	orderByHighestPrice,
	orderByFastestDeparture,
}) => {
	const filterByAction = (e) => {
		const type = e.target.value;
		const actionTable = {
			1: orderByLowestPrice,
			2: orderByHighestPrice,
			3: orderByFastestDeparture,
		};
		actionTable[type](airTicketsList);
	};

	return (
		<S.AirTicketsMainContainer>
			<S.ResultHeaderContainer>
				<S.ResultInformationContainer>
					<span>검색결과 총 {airTicketsList.length}개</span>
					<span>성인 1인 기준 편도 요금입니다. (세금 및 수수료 포함)</span>
				</S.ResultInformationContainer>
				<S.ResultFilterContainer>
					<select onChange={filterByAction}>
						<option value="1">가격 낮은 순</option>
						<option value="2">가격 높은 순</option>
						<option value="3">출발 시간 빠른 순</option>
					</select>
				</S.ResultFilterContainer>
			</S.ResultHeaderContainer>
			<S.ResultListContainer>
				<SortedInformation />
				<div className="result-element-container">
					{airTicketsList.map((airTicket, idx) => (
						<TicketElement key={idx} airTicket={airTicket} />
					))}
				</div>
			</S.ResultListContainer>
		</S.AirTicketsMainContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	airTicketsList: airTickets.airTicketsList,
});

export default connect(mapStateToProps, {
	orderByLowestPrice,
	orderByHighestPrice,
	orderByFastestDeparture,
})(AirTicketsMain);
