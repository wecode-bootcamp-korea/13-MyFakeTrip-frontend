import styled from 'styled-components';

export const ModalBackground = styled.div`
	height: 100vh;
	width: 100vw !important;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.212);
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
	align-items: center;
	justify-content: center;
`;

export const ItineraryModal = styled.div`
	height: 200px;
	width: 500px;
	background-color: white;
	display: flex;
	flex-direction: column;

	.title {
		height: 50px;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10px;

		span {
			font-size: 20px;
			font-weight: bold;
			color: black;
			z-index: 1;
		}

		i {
			font-size: 20px;
			cursor: pointer;
		}
	}

	.main {
		border-top: 1px solid #dbdbdb;
		border-bottom: 1px solid #dbdbdb;
		flex: 1;
		margin: 0;
		display: flex;
		flex-direction: column;

		> div {
			flex: 1;
			display: flex;

			&:first-child {
				border: 1px solid #dbdbdb;
			}

			> div {
				display: flex;
				justify-content: center;
				align-items: center;

				&.big-category {
					flex: 1;
				}

				&.small-category {
					flex: 4;
					display: flex;
					flex-wrap: wrap;
					cursor: pointer;

					span {
						width: calc(100% / 4);
						height: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size: 13px;
						border-bottom: 1px solid #dbdbdb;

						&:nth-child(n + 5) {
							border: none;
						}
					}
				}
			}
		}
	}
`;
