import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import AirPlaneTicket from './AirPlaneTicket/AirPlaneTicket.component';

import { MYPAGE_TICKETS } from '../../config';

const MyPage = (props) => {
	const [onOffCheck, setOnOff] = useState([true, false, false, false]);

	const [startFlight, setStartFlight] = useState([]);

	const [endFlight, setEndFlight] = useState([]);

	const handleMypage = (num) => {
		const onOffCheck = [false, false, false, false];
		onOffCheck[num] = true;
		setOnOff(onOffCheck);
	};

	const userCDM = () => {
		fetch(MYPAGE_TICKETS, {
			method: 'GET',
			headers: {
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjo0fQ.XCYT6I-inwjCTcJqD6mADybAgtuYtDV4HBdShCuZYjk',
			},
		})
			.then((response) => response.json())
			.then((result) => {
				console.log('결과 => ', result);
				setStartFlight(result.start_flight);
				setEndFlight(result.end_flight);
			});
	};

	useEffect(() => {
		userCDM();
	}, []);

	console.log(startFlight);

	return (
		<Section>
			<PageDiv>
				<header>예약내역</header>
				<Container>
					<LeftDiv>
						<ul>
							<ListItem
								onClick={() => handleMypage(0)}
								onOffCheck={onOffCheck[0]}
							>
								<span onOffCheck={onOffCheck[0]}>항공권</span>
								<span onOffCheck={onOffCheck[0]}>➡</span>
							</ListItem>
							<ListItem
								onClick={() => handleMypage(1)}
								onOffCheck={onOffCheck[1]}
							>
								<span onOffCheck={onOffCheck[1]}>호텔 숙박</span>
								<span onOffCheck={onOffCheck[1]}>➡</span>
							</ListItem>
							<ListItem
								onClick={() => handleMypage(2)}
								onOffCheck={onOffCheck[2]}
							>
								<span onOffCheck={onOffCheck[2]}>지난 여행 • 후기</span>
								<span onOffCheck={onOffCheck[2]}>➡</span>
							</ListItem>
							<ListItem
								onClick={() => handleMypage(3)}
								onOffCheck={onOffCheck[3]}
							>
								<span onOffCheck={onOffCheck[3]}>티켓 패스</span>
								<span onOffCheck={onOffCheck[3]}>➡</span>
							</ListItem>
						</ul>
					</LeftDiv>
					<RightDiv>
						<NonBox>
							<AirPlaneTicket
								onOffData={onOffCheck}
								FlightStartData={startFlight}
								FlightEndData={endFlight}
							></AirPlaneTicket>
							<DummyBox onOff={onOffCheck[2] || onOffCheck[3]}>
								<i className="fas fa-store-alt-slash" />
								<p>
									아직 준비중인 여행이 없습니다.
									<br />
									마이페이크트립과 함께 즐거운 여행을 떠나보세요.
								</p>
							</DummyBox>
						</NonBox>
					</RightDiv>
				</Container>
			</PageDiv>
		</Section>
	);
};

export default MyPage;

const Section = styled.section`
	background-color: #f5f6f7;
	height: 100vh;
`;

const PageDiv = styled.div`
	margin: 0 auto;
	padding: 50px 0 102px;
	position: relative;
	width: 880px;
	header {
		color: #495056;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 17px;
	}
`;

const Container = styled.div`
	display: flex;
	height: 530px;
`;

const LeftDiv = styled.div`
	/* border: 1px solid red; */
	height: 240px;
	background-color: white;
	border: 1px solid #ccc;
	flex: 3;
`;

const RightDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin-left: 12px;
	background-color: white;
	border: 1px solid #ccc;
	flex: 7;
`;

const NonBox = styled.div`
	width: 100%;
	position: relative;
	text-align: center;
`;

const DummyBox = styled.div`
	display: ${(props) => (props.onOff ? 'block' : 'none')};
	position: absolute;
	top: 220px;
	left: 148px;
`;

const ListItem = styled.li`
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;

	&:last-child {
		border-bottom: none;
	}

	span {
		&:first-child {
			padding-left: 31px;
			font-size: 16px;

			${(props) =>
				props.onOffCheck &&
				css`
					font-weight: 600;
				`}
		}
		&:last-child {
			margin-right: 31px;
			padding: 4px 6px 6px 6px;
			font-size: 14px;

			${(props) =>
				props.onOffCheck &&
				css`
					background-color: #74b9ff;
					color: white;
					font-weight: 600;
				`}
		}
	}
	${(props) =>
		props.onOffCheck &&
		css`
			border-left: 4px solid #74b9ff;
		`}
`;
