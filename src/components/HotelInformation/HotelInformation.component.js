import React from 'react';

import { HotelInformationContainer } from './HotelInformation.styles';

export const HotelInformation = () => {
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
					<span className="ko-name">서머셋 제주신화월드</span>
					<span className="eng-name">(Somerset Jeju Shinhwa World)</span>
					<span className="address">
						제주특별자치도 서귀포시 안덕면 139 신화역사로
						304번길,중문,제주도,대한민국 63522
					</span>
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

export default HotelInformation;
