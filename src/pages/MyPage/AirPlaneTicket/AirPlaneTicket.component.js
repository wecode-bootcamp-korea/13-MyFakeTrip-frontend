import React from 'react';
import styled from 'styled-components';

const AirPlaneTicket = ({ onOffData, FlightStartData, FlightEndData }) => {
	console.log('결과 =>', FlightEndData !== undefined && FlightEndData);

	return (
		<Container onOff={onOffData[0]}>
			<TicketBox>
				<ul>
					{FlightStartData !== undefined &&
						FlightStartData.map((item) => {
							return (
								<li>
									<Destination>
										<div>
											<span>{item.depart_airport_name}</span>
											<span>{item.depart_airport_depart_eng_name}</span>
										</div>
										<div>
											<span>→</span>
											<span>{`${item.depart_date.split('-')[0]}년 ${
												item.depart_date.split('-')[1]
											}월 ${item.depart_date.split('-')[2]}일`}</span>
										</div>
										<div>
											<span>{item.arrive_airport_name}</span>
											<span>{item.arrive_airport_depart_eng_name}</span>
										</div>
									</Destination>
									<Imeage>
										<img alt="비행사" src={item.airline_logo} />
										<div>{item.airline_name}</div>
									</Imeage>
									<Airline>
										<div>운항종류</div>
										<div>편도</div>
									</Airline>
									<Info>
										<div>좌석등급</div>
										<div>{item.seat_class}</div>
									</Info>
									<Info>
										<div>승객</div>
										<div>{`${item.total_people} 명`}</div>
									</Info>
								</li>
							);
						})}
					{FlightEndData !== undefined &&
						FlightEndData.map((item) => {
							return (
								<li>
									<Destination>
										<div>
											<span>{item.depart_airport_name}</span>
											<span>{item.depart_airport_depart_eng_name}</span>
										</div>
										<div>
											<span>→</span>
											<span>{`${item.depart_date.split('-')[0]}년 ${
												item.depart_date.split('-')[1]
											}월 ${item.depart_date.split('-')[2]}일`}</span>
										</div>
										<div>
											<span>{item.arrive_airport_name}</span>
											<span>{item.arrive_airport_depart_eng_name}</span>
										</div>
									</Destination>
									<Imeage>
										<img alt="비행사" src={item.airline_logo} />
										<div>{item.airline_name}</div>
									</Imeage>
									<Airline>
										<div>운항종류</div>
										<div>편도</div>
									</Airline>
									<Info>
										<div>좌석등급</div>
										<div>{item.seat_class}</div>
									</Info>
									<Info>
										<div>승객</div>
										<div>{`${item.total_people} 명`}</div>
									</Info>
								</li>
							);
						})}
				</ul>
			</TicketBox>
		</Container>
	);
};

export default AirPlaneTicket;

const Container = styled.div`
	display: ${(props) => (props.onOff ? 'block' : 'none')};
`;

const TicketBox = styled.div`
	ul {
		li {
			display: flex;
			border-bottom: 1px solid #ccc;
		}
	}
`;

const Destination = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 3;
	margin: 30px 0 30px 16px;
	border-right: 1px solid #ccc;
	div {
		span {
			display: block;
			&:first-child {
				font-size: 18px;
				font-weight: 600;
			}
			&:last-child {
				padding-top: 4px;
				font-size: 12px;
			}
		}
		&:nth-child(2) {
			padding: 0 16px;
			span {
				display: block;
				&:first-child {
					font-size: 18px;
				}
				&:last-child {
					font-size: 12px;
				}
			}
		}
	}
`;

const Info = styled.div`
	border-right: 1px solid #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex: 1;
	margin: 30px auto;
	img {
		display: block;
		width: 28px;
		padding-bottom: -4px;
	}
	div {
		display: block;
		font-size: 12px;
		&:first-child {
			padding-bottom: 4px;
		}
	}
	&:last-child {
		border: none;
	}
`;

const Imeage = styled.div`
	display: flex;
	position: relative;
	bottom: 3px;
	align-items: center;
	flex-direction: column;
	flex: 1;
	margin: 30px auto;
	img {
		display: block;
		width: 28px;
	}
	div {
		display: block;
		font-size: 12px;
		&:first-child {
			padding-bottom: 4px;
		}
	}
	&:last-child {
		border: none;
	}
`;

const Airline = styled.div`
	display: flex;
	position: relative;
	border-left: 1px solid #ccc;
	border-right: 1px solid #ccc;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex: 1;
	margin: 30px auto;
	div {
		display: block;
		font-size: 12px;
		&:first-child {
			padding-bottom: 4px;
		}
	}
	&:last-child {
		border: none;
	}
`;
