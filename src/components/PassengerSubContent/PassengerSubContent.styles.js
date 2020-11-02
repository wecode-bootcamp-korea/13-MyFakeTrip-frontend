import styled from 'styled-components';

export const PassengerSubContentContainer = styled.div`
	position: absolute;
	top: 110%;
	right: -5px;
	display: flex;
	flex-direction: column;
	width: 400px;
	height: 355px;
	background-color: #fff;
	box-sizing: border-box;

	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 50px;
		padding: 0px 20px;
		box-sizing: border-box;

		span {
			font-size: 16px;
		}

		i {
			font-size: 20px;
			cursor: pointer;
		}
	}

	.passenger-amount {
		height: 200px;
		padding: 0 20px;

		> div {
			display: flex;
			height: calc(100% / 3);

			.information {
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex: 1.5;

				span {
					font-weight: normal;

					&:first-child {
						font-size: 16px;
					}

					&:last-child {
						font-size: 12px;
					}
				}
			}

			.amount {
				display: flex;
				justify-content: flex-end;
				align-items: center;
				flex: 1;

				span {
					font-weight: normal;
					cursor: pointer;

					&:first-child,
					&:last-child {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 35px;
						height: 35px;
						border: 1px solid #000;
						border-radius: 50%;
						font-size: 18px;
					}

					&:nth-child(2) {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 35px;
						height: 35px;
						font-size: 18px;
					}
				}
			}
		}
	}

	.seat-select {
		display: flex;
		flex: 1;
		flex-wrap: wrap;

		.seat-type {
			display: flex;
			align-items: center;
			width: 40%;
			height: 50px;
			margin: 0 10px;
			padding: 10px;

			input[type='radio'] {
				margin-right: 10px;
				transform: scale(1.5);
			}

			span {
				font-size: 14px;
				font-weight: normal;
			}
		}
	}
`;
