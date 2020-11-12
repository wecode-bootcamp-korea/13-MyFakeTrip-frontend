import React from 'react';
import { connect } from 'react-redux';

import {
	changeTimeFormat,
	changeDateFormatToKorean,
} from '../../redux/airTickets/airTickets.utils';

import { DepartureArrival } from './DepartureArrivalContainer.styles';

export const DepartureArrivalContainer = ({
	ticket,
	departure,
	passengerAmount,
}) => {
	const {
		flightid,
		airport_depart,
		airport_arrive,
		depart_time,
		arrive_time,
		depart_date,
		depart_weekday,
	} = ticket;
	return (
		<DepartureArrival>
			<div className="information">
				<div className="flight">
					<span>{departure ? '가는날' : '오는날'}</span>
					<div className="flight-number">
						<span>{flightid}편</span>
						<span>상세</span>
					</div>
				</div>
				<div className="plan">
					<span>
						{airport_depart} - {airport_arrive}
					</span>
				</div>
				<div className="departure">
					<span>
						{changeDateFormatToKorean(depart_date)} ({depart_weekday}){' '}
						{changeTimeFormat(depart_time)}
					</span>
				</div>
				<div className="arrival">
					<span>
						{changeDateFormatToKorean(depart_date)} ({depart_weekday}){' '}
						{changeTimeFormat(arrive_time)}
					</span>
				</div>
				<div className="seat">
					<span>
						일반석
						<br /> {passengerAmount}석
					</span>
				</div>
				<div className="luggage">
					<span>2PC</span>
					<i className="fas fa-question-circle" />
				</div>
			</div>
		</DepartureArrival>
	);
};

const mapStateToProps = ({ airTickets }) => ({
	passengerAmount: airTickets.passengerAmount,
});

export default connect(mapStateToProps)(DepartureArrivalContainer);
