import React from 'react';
import { connect } from 'react-redux';

import { HotelInformationContainer } from './HotelInformation.styles';

export const HotelInformation = ({ hotelDetail }) => {
	console.log(hotelDetail);
	const { name, location, description } = hotelDetail;
	return (
		<HotelInformationContainer>
			<div className="image-container">
				<img
					src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					alt="hotel"
				/>
			</div>
			<div className="information-container">
				<div className="main-information">
					<span className="ko-name">{name}</span>
					<span className="eng-name">{description}</span>
					<span className="address">{location}</span>
				</div>
				<div className="advertisement">
					<p>
						<span>판매 완료 임박!</span> 유사한 3개의 숙소 이미 판매 완료! 모두
						판매 완료되기 전에 빠르게 예약하세요!
					</p>
				</div>
			</div>
		</HotelInformationContainer>
	);
};

const mapStateToProps = ({ hotels }) => ({
	hotelDetail: hotels.hotel.hotel_detail,
});

export default connect(mapStateToProps)(HotelInformation);
