import styled from 'styled-components';

export const PassengerWarningContainer = styled.div`
	position: relative;
	height: 110px;
	background-color: #dbdbdb;
	border: 1px solid #000;
	ul {
		position: absolute;
		top: 0;
		left: 30px;
		font-size: 12px;
		list-style-type: circle;

		li {
			span {
				color: red;
				font-size: 14px;
			}
		}
	}
`;
