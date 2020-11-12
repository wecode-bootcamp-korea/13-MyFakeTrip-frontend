import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Facilities from './Facilitis/Facilities.component';
import { FiMapPin, FiMap, FiCopy } from 'react-icons/fi';

const FACILITYLIST = [
	{
		id: 1,
		title: '편의시설',
	},
	{
		id: 2,
		title: '체크인 체크아웃',
	},
	{
		id: 3,
		title: '소개',
	},
];

function Infos({ hotelDetailData }) {
	const [hotelInfos, setHotelInfos] = useState(hotelDetailData.hotel_detail);
	const [checkInTime, setCheckInTime] = useState('');
	const [checkOutTime, setCheckOutTime] = useState('');

	const changeCheckTimeForm = () => {
		const checkInSplit = hotelInfos.checkin_time.split(':');
		const checkOutSplit = hotelInfos.checkout_time.split(':');

		+checkInSplit[0] > 12
			? setCheckInTime(`${+checkInSplit[0] - 12}:00 PM`)
			: setCheckInTime(`${checkInSplit[0]}:00 AM`);

		+checkOutSplit[0] > 12
			? setCheckOutTime(`${+checkOutSplit[0] - 12}:00 PM`)
			: setCheckOutTime(`${checkOutSplit[0]}:00 AM`);
	};

	useEffect(() => {
		changeCheckTimeForm();
	}, []);

	return (
		<InfosCon>
			<h2>숙소 정보</h2>
			<LocationWrap>
				<div>
					<MapMarker />
					<p>{hotelInfos.location}</p>
				</div>
				<div>
					<AddressButton>
						<CopyIcon />
						주소 복사
					</AddressButton>
					<MapLink>
						<MapIcon />
						지도 보기
					</MapLink>
				</div>
			</LocationWrap>
			<div>
				{FACILITYLIST.map((li, idx) => {
					const facilityContent = (
						<Facilities hotelDetailData={hotelDetailData} />
					);
					const checkinContent = (
						<p>
							{checkInTime} - {checkOutTime}
						</p>
					);
					const description = <p>{hotelInfos.description}</p>;

					return (
						<Wrap key={idx}>
							<h3>{li.title}</h3>
							{li.id === 1
								? facilityContent
								: li.id === 2
								? checkinContent
								: description}
						</Wrap>
					);
				})}
			</div>
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
	line-height: 18px;
`;

const Icon = css`
	width: 20px;
	height: 20px;
	margin-right: 8px;
`;

const InfosCon = styled.section`
	width: 700px;
	margin-top: 64px;

	h2 {
		margin-bottom: 20px;
		font-size: 28px;
		font-weight: 700;
	}
`;

const LocationWrap = styled.div`
	height: 80px;
	padding: 20px;
	border: 1px solid #e9ecef;
	border-radius: 2px;
	background-position: center;
	background: linear-gradient(to left, rgba(245, 251, 255, 0), #fff),
		url('https://previews.123rf.com/images/dikobrazik/dikobrazik1608/dikobrazik160800101/63634990-%EC%B6%94%EC%83%81-%EB%8F%84%EC%8B%9C%EC%A7%80%EB%8F%84-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.jpg');
	display: flex;
	justify-content: space-between;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		max-width: 300px;
		margin-bottom: 0px;
		color: #495056;
		overflow: hidden;
		font-size: 13px;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

const MapMarker = styled(FiMapPin)`
	width: 28px;
	height: 28px;
	margin-right: 8px;
	color: ${({ theme }) => theme.colors.mainBlue};
`;

const AddressButton = styled.button`
	width: 106px;
	height: 40px;
	border: 1px solid #ced4da;
	border-radius: 2px;
	color: #495056;
	background-color: #fff;
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	&:focus {
		outline: none;
	}
`;

const MapLink = styled(AddressButton)`
	margin-left: 4px;
`;

const CopyIcon = styled(FiCopy)`
	${Icon}
`;

const MapIcon = styled(FiMap)`
	${Icon}
`;

const Wrap = styled.div`
	padding: 32px 0;
	border-bottom: 1px solid #e9ecef;
	display: flex;
	align-items: ${(Facilities) => (Facilities ? 'null' : 'center')};

	h3 {
		${InfoTitleStyle};
	}

	p {
		${InfoContent}
	}
`;
