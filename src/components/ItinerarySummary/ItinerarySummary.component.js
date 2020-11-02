import React from 'react';
import { connect } from 'react-redux';

import { changeDateFormatToKorean } from '../../redux/airTickets/airTickets.utils';

import S from './ItinerarySummary.styles';

const ItinerarySummary = ({ ticket, passengerAmount }) => {
	const {
		airline,
		airline_url,
		airport_arrive,
		airport_depart,
		depart_date,
		depart_weekday,
		airport_depart_eng,
		airport_arrive_eng,
		seat_class,
	} = ticket;
	return (
		<S.ItinerarySummaryContainer>
			<S.DepartureAndArrivalContainer>
				<div className="information">
					<div className="departure">
						<span>{airport_depart}</span>
						<span>{airport_depart_eng}</span>
					</div>
					<div className="date">
						<i className="fas fa-long-arrow-alt-right" />
						<span>
							{changeDateFormatToKorean(depart_date)}({depart_weekday})
						</span>
					</div>
					<div className="arrival">
						<span>{airport_arrive}</span>
						<span>{airport_arrive_eng}</span>
					</div>
				</div>
			</S.DepartureAndArrivalContainer>
			<S.AdditionalInformationContainer>
				<div className="airline">
					<span>
						<img src={airline_url} alt="logo" />
					</span>
					<span>{airline}</span>
				</div>
				<div className="flight-type">
					<span>운항종류</span>
					<span>편도</span>
				</div>
				<div className="seat">
					<span>좌석등급</span>
					<span>{seat_class}</span>
				</div>
				<div className="passenger">
					<span>승객</span>
					<span>{passengerAmount}명</span>
				</div>
			</S.AdditionalInformationContainer>
		</S.ItinerarySummaryContainer>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	passengerAmount: airTickets.passengerAmount,
});

export default connect(mapStateToProps)(ItinerarySummary);
