import styled from 'styled-components';

export const DepartureArrival = styled.div`
	display: flex;
	font-size: 12px;
	border-bottom: 1px solid #000;
	flex: 1;

	.information {
		display: flex;
		width: 100%;

		> div {
			display: flex;
			align-items: center;
		}

		.flight {
			display: flex;
			flex: 2;

			.flight-number {
				margin-left: 30px;

				span {
					&:last-child {
						margin-left: 5px;
						border: 1px solid #dbdbdb;
						font-weight: bold;
					}
				}
			}
		}

		.plan {
			flex: 2;
		}

		.departure,
    .arrival,
    .seat,
    .luggage {
			flex: 1;
		}

    i {
      margin-left: 5px;
    }
	}
  }
`;
