import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Facilities from './Facilitis/Facilities.component';

function Infos() {
	const [facility, setFacility] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/data/hoteldetaildata.json')
			.then((res) => res.json())
			.then((facility) => setFacility(facility.Facility));
	}, []);

	return (
		<InfosCon>
			<h2>숙소 정보</h2>
			<MapWrap></MapWrap>
			<InfosWrap>
				<FacilitiesWrap>
					<h3>편의시설</h3>
					<Facilities facility={facility} />
				</FacilitiesWrap>

				<IntroductionCheckWrap>
					<h3>체크인/체크아웃</h3>
					<p>2:00 PM - 11:00 AM</p>
				</IntroductionCheckWrap>

				<IntroductionCheckWrap>
					<h3>소개</h3>
					<p>
						인근 해변에서 눈 부신 햇살을 만끽하고 시설 내 카지노에서 즐거운
						시간을 보낸 다음에는 제주신라호텔 내 3 개의 레스토랑 중에서 입맛대로
						골라 편하게 식사도 즐기세요.
					</p>
				</IntroductionCheckWrap>
			</InfosWrap>
		</InfosCon>
	);
}

export default Infos;

const InfoTitleStyle = css`
	width: 160px;
	margin-bottom: 0px;
	color: #343a40;
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
`;

const InfoContent = css`
	width: 540px;
	margin-bottom: 0px;
	font-size: 14px;
`;

const InfosCon = styled.section`
	width: 700px;
	margin-top: 64px;
	h2 {
		font-size: 28px;
		font-weight: 700;
	}
`;

const MapWrap = styled.div`
	height: 80px;
	background-color: skyblue;
`;

const InfosWrap = styled.div``;

const FacilitiesWrap = styled.div`
	padding: 32px 0;
	border-bottom: 1px solid #e9ecef;
	display: flex;

	h3 {
		${InfoTitleStyle}
	}
`;

const IntroductionCheckWrap = styled.div`
	padding: 32px 0;
	border-bottom: 1px solid #e9ecef;
	display: flex;
	align-items: center;

	h3 {
		${InfoTitleStyle};
	}

	p {
		${InfoContent}
	}
`;
