import styled from 'styled-components';

export const SearchOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: url('https://specials-images.forbesimg.com/imageserve/5d8bac4f22254b0008e17703/960x0.jpg?fit=scale');
	background-size: 100vw 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	filter: grayscale(70%);
`;

export const LoadingContainer = styled.div`
	width: 400px;
	height: 500px;

	.text-information,
	.departure-and-arrival,
	.advertisement {
		height: 100px;
		border-bottom: 2px solid #dbdbdb;
	}

	.text-information {
		display: flex;
		align-items: center;
		color: white;
		font-size: 20px;

		p {
			width: 100%;
			margin: 0;
			text-align: center;

			span {
				font-weight: bold;
			}
		}
	}

	.departure-and-arrival {
		display: flex;
		> div {
			flex: 1;
		}

		.departure,
		.arrival {
			display: flex;
			flex-direction: column;
			justify-content: center;

			span {
				color: white;
				text-align: center;
				&:first-child {
					font-size: 30px;
					font-weight: bold;
				}
			}
		}

		.icon {
			display: flex;
			justify-content: center;
			align-items: center;

			i {
				color: white;
				font-size: 50px;
			}
		}
	}

	.advertisement {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: 16px;

		p {
			margin: 0;
			text-align: center;

			span {
				font-size: 20px;
				font-weight: bold;
			}
		}
	}

	.loading-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100% - 300px);

		.changing-icon {
			position: relative;
			width: 100px;
			height: 100px;
			border: 2px solid ${({ theme }) => theme.colors.mainBlue};
			border-radius: 50%;

			i {
				position: absolute;
				top: 50%;
				left: 50%;
				color: ${({ theme }) => theme.colors.mainBlue};
				font-size: 30px;
				transform: translate(-50%, -50%);

				&.fa-plane-departure {
					animation: departure-loading 3s infinite;
				}

				&.fa-globe-asia {
					animation: plane-loading 3s infinite;
				}
			}
		}
	}
	@keyframes departure-loading {
		0%,
		100% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}
	}

	@keyframes plane-loading {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}
	}
`;
