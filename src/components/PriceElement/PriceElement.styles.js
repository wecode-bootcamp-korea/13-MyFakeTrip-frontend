import styled from 'styled-components';

export const PriceElementContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 167px;
	margin-bottom: 15px;

	.people-information {
		position: relative;
		height: 30px;
		border-bottom: 1px solid #000;

		p {
			position: absolute;
			top: 50%;
			font-weight: bold;
			transform: translateY(-50%);

			span {
				color: ${({ theme }) => theme.colors.mainBlue};
			}
		}
	}

	.price-information {
		display: flex;
		flex-direction: column;
		height: 107px;
		padding: 10px 0;
		border-bottom: 1px solid #000;

		> div {
			display: flex;
			height: calc(100% / 4);

			span {
				font-size: 13px;
				flex: 1;

				&:last-child {
					display: flex;
					justify-content: flex-end;
				}
			}
		}
	}

	.total-price {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;

		span {
			font-weight: bold;
		}
	}
`;
