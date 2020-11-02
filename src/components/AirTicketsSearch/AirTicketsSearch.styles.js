import styled from 'styled-components';

export const AirTicketsSearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;
	height: 80%;
	position: relative;

	> div {
		width: 92%;

		> div,
		> button {
			margin: 0 2px;

			&:first-child {
				margin-left: 0;
			}
		}
	}

	.title {
		padding-bottom: 10px;
		span {
			width: 100%;
			height: 20px;
			color: #fff;
			font-weight: bold;
		}
	}
`;

export const SearchContainer = styled.div`
	position: relative;
	display: flex;
	height: calc(100% - 30px);

	.travel {
		display: flex;
		background-color: #fff;
		flex: 1.6;

		.departure,
		.arrival {
			display: flex;
			align-items: center;
			padding-left: 10px;
			flex: 1;
			cursor: pointer;

			span {
				font-weight: bold;
			}
		}

		.change {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 40px;

			button {
				width: 30px;
				height: 30px;
				background-color: #dbdbdb;
				border: none;
				border-radius: 6px;
				cursor: pointer;
			}
		}
	}

	.date-container {
		flex: 1;

		input[type='text'] {
			position: relative;
			width: 100%;
			height: 100%;
			outline: none;
			border: none;
			text-align: center;
			cursor: pointer;
		}
	}

	.passenger {
		position: relative;
		display: flex;
		align-items: center;
		background-color: #fff;
		flex: 1;
		cursor: pointer;

		.fa-user {
			margin: 0px 10px;
			font-size: 23px;
		}

		span {
			font-size: 13px;
			font-weight: bold;
		}

		.fa-angle-down {
			position: absolute;
			right: 10px;
			font-size: 20px;
		}
	}

	.search-button {
		width: 75px;
		background-color: ${({ theme }) => theme.colors.mainBlue};
		background-color: white;
		color: white;
		border: none;
		font-weight: bold;
		cursor: pointer;

		span {
			color: ${({ theme }) => theme.colors.mainBlue};
			font-size: 17px;
		}
	}
`;
