import styled from 'styled-components';

export const AdditionalInformationContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 40px;
	margin-top: 20px;
	background-color: #dbdbdb;
	border: 1px solid #000;

	ul {
		position: absolute;
		/* top: 0;
		left: 30px; */
		top: 50%;
		left: 30px;
		transform: translateY(-50%);
		font-size: 12px;
		list-style-type: circle;
	}
`;
