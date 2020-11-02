import styled from 'styled-components';

export const AirTicketsPage = styled.div`
	.ticket_search_container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90px;
		background-color: ${({ theme }) => theme.colors.mainBlue};
	}

	.ticket_list_container {
		display: flex;
		justify-content: center;
		min-height: calc(100vh - 90px);
		padding-top: 20px;
		background-color: #f5f6f7;

		.ticket_list_information {
			display: flex;
			width: 64%;
		}
	}
`;
