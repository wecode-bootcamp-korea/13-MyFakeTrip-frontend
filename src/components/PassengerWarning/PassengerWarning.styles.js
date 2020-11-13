import styled from 'styled-components';

export const PassengerWarningContainer = styled.div`
	position: relative;
	height: 90px;
	background-color: #dbdbdb;
	border: 1px solid #000;
	ul {
		position: absolute;
		top: 50%;
		left: 30px;
		transform: translateY(-50%);
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
