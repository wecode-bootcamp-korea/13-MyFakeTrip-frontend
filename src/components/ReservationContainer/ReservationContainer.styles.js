import styled from 'styled-components';

export const Reservation = styled.div`
	.reservation-text {
		font-size: 20px;
		font-weight: bold;
	}

	.reservation {
		margin-top: 20px;
		padding-bottom: 20px;
		border: 1px solid #dbdbdb;

		> div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 80px;
			padding-left: 20px;

			span {
				font-weight: bold;
			}
		}

		.name {
			input {
				width: 190px;
				height: 35px;
				outline: none;
				border: 1px solid #dbdbdb;
			}
		}

		.email {
			.email-input {
				input {
					width: 190px;
					height: 35px;
					margin: 0 5px;
					outline: none;
					border: 1px solid #dbdbdb;

					&:first-child {
						margin-left: 0;
					}
				}

				select {
					width: 140px;
					height: 35px;
					outline: none;
					border: 1px solid #dbdbdb;
				}
			}
		}

		.phone {
			input,
			select {
				width: 300px;
				height: 35px;
				margin-right: 10px;
				outline: none;
				border: 1px solid #dbdbdb;
			}
		}

		p {
			margin-left: 20px;
			font-size: 12px;
		}
	}
`;
