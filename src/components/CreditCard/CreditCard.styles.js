import styled from 'styled-components';

export const CreditCardContainer = styled.div`
	height: 200px;
	margin-top: 10px;
	border: 1px solid #dbdbdb;

	.title {
		display: flex;
		align-items: center;
		height: 30px;
		background-color: ${({ theme }) => theme.colors.mainBlue};

		span {
			color: white;
			font-weight: bold;
		}
	}
`;

export const CreditCardInformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 30px);
	padding: 20px;

	> div {
		display: flex;
		flex: 1;

		.text {
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid #000;
			flex: 1;

			span {
				font-weight: bold;
			}
		}

		.content {
			display: flex;
			align-items: center;
			padding-left: 10px;
			border: 1px solid #000;
			flex: 3;

			button {
				width: 100px;
				height: 50px;
				background-color: ${({ theme }) => theme.colors.mainBlue};
				border: none;
				border-radius: 5px;
			}
		}
	}
`;
