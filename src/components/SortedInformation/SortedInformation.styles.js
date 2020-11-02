import styled, { css } from 'styled-components';

const SetFlexCenterHeightMargin = css`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70%;
	margin-right: 10px;
`;

export const SortedInformatonContainer = styled.div`
	display: flex;
	align-items: center;
	height: 66px;
	background-color: #fff;

	.information-container {
		display: flex;
		align-items: center;
		width: 100%;
		height: 80%;
		padding-left: 10px;

		.tag {
			${SetFlexCenterHeightMargin}
			color: ${({ theme }) => theme.colors.mainBlue};
			border: ${({ theme }) => theme.colors.mainBlue};
			font-weight: bold;
		}

		.departure-and-arrival {
			${SetFlexCenterHeightMargin}
			span {
				font-size: 16px;
				font-weight: bold;
			}

			i {
				margin: 0 10px;
			}
		}
	}
`;
