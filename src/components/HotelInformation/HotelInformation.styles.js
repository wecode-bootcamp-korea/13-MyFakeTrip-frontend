import styled from 'styled-components';

export const HotelInformationContainer = styled.div`
	margin-bottom: 30px;
	border: 1px solid #dbdbdb;
	height: 200px;
	display: flex;

	.image-container {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			height: 80%;
			width: 80%;
		}
	}

	.information-container {
		flex: 2;
		display: flex;
		flex-direction: column;

		.main-information {
			flex: 2.3;
			width: 300px;
			display: flex;
			flex-direction: column;

			.ko-name {
				font-weight: bold;
				font-size: 23px;
			}

			.eng-name {
				font-size: 20px;
			}

			.address {
				font-size: 12px;
			}
		}

		.advertisement {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;

			p {
				font-size: 12px;
				background-color: rgba(255, 192, 203, 0.331);

				span {
					font-weight: bold;
					color: ${({ theme }) => theme.colors.mainBlue};
				}
			}
		}
	}
`;
