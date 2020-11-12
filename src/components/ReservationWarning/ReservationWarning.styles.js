import styled from 'styled-components';

export const ReservationWarningContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 110px;
	margin-top: 20px;
	background-color: #dbdbdb;
	border: 1px solid #000;

	ul {
		position: absolute;
		top: 0;
		left: 30px;
		font-size: 12px;
		list-style-type: circle;

		li {
			&:first-child {
				span {
					color: ${({ theme }) => theme.colors.mainBlue};
				}
			}
		}
	}
`;
