import styled from 'styled-components';

export const ItinerarySummaryContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #dbdbdb;
	height: 100px;
	margin-bottom: 10px;
	}
`;

export const DepartureAndArrivalContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 50%;
	flex: 1;

	.information {
		display: flex;
		width: 70%;
		height: 100%;

		.departure,
		.arrival {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 1;

			span {
				&:first-child {
					font-size: 18px;
					font-weight: bold;
				}
			}
		}

		.date {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex: 2.1;

			i {
				height: 18px;
			}

			span {
				font-size: 12px;
			}
		}
	}
`;

export const AdditionalInformationContainer = styled.div`
	display: flex;
	height: 50%;
	flex: 1;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-left: 1px solid #dbdbdb;

		span {
			font-size: 12px;

			img {
				width: 25px;
				height: 25px;
			}
		}
	}

	.airline {
		flex: 2;
	}

	.flight-type {
		flex: 1.5;
	}

	.seat {
		flex: 2;
	}

	.passenger {
		flex: 1;
	}
`;

const S = {
	ItinerarySummaryContainer,
	DepartureAndArrivalContainer,
	AdditionalInformationContainer,
};

export default S;
