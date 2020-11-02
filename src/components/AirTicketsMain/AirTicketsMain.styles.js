import styled from 'styled-components';

const AirTicketsMainContainer = styled.div`
	width: calc(100% - 240px);
`;

const ResultHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	height: 60px;
`;

const ResultFilterContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex: 1;

	select {
		width: 170px;
		height: 40px;
		outline: none;
	}
`;

const ResultListContainer = styled.div`
	.result-element-container {
		margin-top: 10px;
	}
`;

const ResultInformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 2;

	span {
		&:first-child {
			font-weight: bold;
		}

		&:last-child {
			font-size: 12px;
		}
	}
`;

const S = {
	AirTicketsMainContainer,
	ResultHeaderContainer,
	ResultListContainer,
	ResultInformationContainer,
	ResultFilterContainer,
};

export default S;
