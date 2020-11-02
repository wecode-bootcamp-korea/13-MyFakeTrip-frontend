import styled from 'styled-components';

export const PriceCheck = styled.div`
	display: flex;
	flex-direction: column;
	height: 280px;
	margin-top: 10px;

	span {
		display: block;
		height: 40px;
		margin-bottom: 10px;
		font-size: 20px;
		font-weight: bold;
		border-bottom: 1px solid #dbdbdb;
	}

	.price-table {
		flex: 3;

		> div {
			display: flex;
			height: calc(100% / 4);
			border: 1px solid #dbdbdb;

			span {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
				font-size: 12px;
				font-weight: normal;
				flex: 1;

				&:last-child {
					font-weight: bold;
				}
			}
		}
	}

	.price-result {
		display: flex;
		justify-content: flex-end;
		height: 60px;
		margin-top: 10px;
		flex: 1;

		p {
			display: flex;
			height: 100%;
			margin-right: 30px;

			span {
				height: 100%;
				border: none;
				font-size: 14px;
			}
		}

		.total-price {
			span {
				border: none;
				font-size: 25px;
			}
		}
	}
`;
