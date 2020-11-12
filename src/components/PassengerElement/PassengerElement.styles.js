import styled from 'styled-components';

export const GenderButton = styled.div`
	background-color: ${({ gender, theme }) =>
		gender ? theme.colors.mainBlue : 'white'};
	border: 1px solid #dbdbdb;
	width: 50%;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const PassengerContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 380px;
	margin-bottom: 10px;
	padding: 20px;
	border: 1px solid #dbdbdb;

	> div {
		flex: 1;
	}

	.passenger-information-text {
		font-size: 17px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.name {
		display: flex;
		flex-direction: column;
		flex: 1;

		.name-input-container {
			display: flex;
			flex: 1;

			> div {
				span {
					font-size: 16px;
					font-weight: bold;
				}

				input {
					height: 35px;
					outline: none;
					border: 1px solid #dbdbdb;
				}
			}

			.surname {
				flex: 1;
			}

			.name {
				flex: 2;
			}
		}

		.writing-information {
			display: flex;
			flex-direction: column;

			span {
				font-size: 12px;
			}
		}
	}

	.gender {
		display: flex;
		flex-direction: column;
		margin-top: 10px;

		span {
			font-size: 16px;
			font-weight: bold;
		}

		.button-container {
			display: flex;
			width: 70%;
			flex: 1;
		}
	}

	.nationality {
		display: flex;
		flex-direction: column;
		margin-top: 10px;

		span {
			font-size: 16px;
			font-weight: bold;
		}

		select {
			width: 100px;
			height: 40px;
			outline: none;
		}
	}

	.birth {
		span {
			font-size: 16px;
			font-weight: bold;
		}

		input {
			width: 200px;
			height: 40px;
			margin-right: 10px;
			border: 1px solid #dbdbdb;
		}
	}
`;
