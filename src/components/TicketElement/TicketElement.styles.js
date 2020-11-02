import styled from 'styled-components';

const TicketElementContainer = styled.div`
	display: flex;
	align-items: center;
	height: 80px;
	margin-bottom: 10px;
	padding: 0 10px;
	background-color: #fff;
	transition: 0.3s;

	&:hover {
		box-shadow: 0 0 10px #dbdbdb;
	}

	button {
		width: 60px;
		height: 40px;
		background-color: ${({ theme }) => theme.colors.mainBlue};
		color: white;
		border: none;
		font-weight: bold;
		cursor: pointer;
	}
`;

const AirlineInformationContainer = styled.div`
	display: flex;
	align-items: center;
	height: 80%;
	flex: 1.3;
	img {
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}

	.airline {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: calc(100% - 40px);
		height: 40px;

		span {
			font-size: 12px;
		}
	}
`;

const TimeInformationContainer = styled.div`
	display: flex;
	height: 80%;
	flex: 1.8;

	.departure {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;

		span {
			&:first-child {
				font-size: 17px;
				font-weight: bold;
			}

			&:last-child {
				font-size: 12px;
			}
		}
	}

	.time {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1.5;

		span {
			font-size: 12px;
		}
	}

	.arrival {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;

		span {
			&:first-child {
				font-size: 17px;
				font-weight: bold;
			}

			&:last-child {
				font-size: 12px;
			}
		}
	}
`;

const SeatContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80%;
	padding: 0px 20px;
	flex: 1.2;
	box-sizing: border-box;

	span {
		font-size: 13px;
	}
`;

const PriceContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80%;
	flex: 1;

	span {
		font-size: 20px;
		font-weight: bold;
	}
`;
const S = {
	TicketElementContainer,
	AirlineInformationContainer,
	TimeInformationContainer,
	SeatContainer,
	PriceContainer,
};

export default S;
