import styled from 'styled-components';

export const PurchaseContainer = styled.div`
	display: flex;
	justify-content: center;
	background-color: #fff;

	.purchase-container {
		display: flex;
		width: 50%;
		margin-top: 40px;

		.purchase-information-container {
			width: calc(100% - 296px);
			margin-right: 30px;

			.itinerary-container {
				margin-bottom: 30px;
			}
		}

		.price-container {
			width: 296px;
		}
	}
`;
