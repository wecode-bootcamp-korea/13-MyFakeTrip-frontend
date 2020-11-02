import styled from 'styled-components';

export const ItineraryInformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 170px;

	.top {
		display: flex;
		align-items: center;
		height: 50px;
		border-top: 1px solid #000;
		border-bottom: 1px solid #000;

		span {
			&:first-child,
			&:nth-child(2) {
				flex: 2;
			}

			&:not(:first-child):not(:nth-child(2)) {
				flex: 1;
			}
		}
	}

	.arrival-container {
		border-bottom: none;
	}
`;
