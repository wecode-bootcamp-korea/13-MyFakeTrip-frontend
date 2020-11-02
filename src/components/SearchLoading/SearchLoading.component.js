import React from 'react';
import { connect } from 'react-redux';

import { changeDateFormatToKorean } from '../../redux/airTickets/airTickets.utils';

import { SearchOverlay, LoadingContainer } from './SearchLoading.styles';

const SearchLoading = ({ departure, arrival, departureDate, arrivalDate }) => {
	return (
		<SearchOverlay>
			<LoadingContainer>
				<div className="text-information">
					<p>
						<span>{departure}</span>에서 <span>{arrival}</span>까지
						<br />
						왕복 항공권을 찾고 있습니다.
					</p>
				</div>
				<div className="departure-and-arrival">
					<div className="departure">
						<span>{departure}</span>
						<span>{changeDateFormatToKorean(departureDate)}</span>
					</div>
					<div className="icon">
						<i className="fas fa-ellipsis-h" />
					</div>
					<div className="arrival">
						<span>{arrival}</span>
						<span>{changeDateFormatToKorean(arrivalDate)}</span>
					</div>
				</div>
				<div className="advertisement">
					<p>
						마이리얼트립에서 호텔 예약하고
						<br />
						<span>72,000원</span> 받아가세요
					</p>
				</div>
				<div className="loading-icon">
					<div className="changing-icon">
						<i className="fas fa-plane-departure" />
						<i className="fas fa-globe-asia" />
					</div>
				</div>
			</LoadingContainer>
		</SearchOverlay>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	departure: airTickets.departure,
	arrival: airTickets.arrival,
	departureDate: airTickets.departureDate,
	arrivalDate: airTickets.arrivalDate,
});

export default connect(mapStateToProps)(SearchLoading);
