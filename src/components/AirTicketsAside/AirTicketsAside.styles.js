import styled, { css } from 'styled-components';

const ContainerStyle = css`
	padding: 10px 0;
	border-top: 1px solid #dbdbdb;

	.title {
		display: flex;
		justify-content: space-between;
		height: 30px;

		span {
			display: flex;
			align-items: center;
			font-size: 15px;
			font-weight: bold;
		}

		i {
			display: flex;
			align-items: center;
			font-size: 20px;
		}
	}

	.information {
		height: 0;
		visibility: hidden;

		&.active {
			height: auto;
			visibility: visible;
		}
	}
`;

const ListContainer = css`
	.list {
		.element {
			display: flex;
			align-items: center;
			height: 30px;

			input[type='checkbox'] {
				width: 20px;
				height: 20px;
				margin-right: 10px;
			}
		}
	}
`;

const AirTicketsAsideContainer = styled.div`
	width: 270px;
	margin-right: 30px;
	user-select: none;

	> div > div:first-child {
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.075);
		}
	}
`;

const AirlinesContainer = styled.div`
	${ContainerStyle}

	.information {
		${ListContainer}
		.selection {
			span {
				cursor: pointer;
				&:first-child {
					position: relative;
					margin-right: 10px;
					&::after {
						position: absolute;
						top: 45%;
						right: -5px;
						content: '|';
						transform: translateY(-50%);
					}
				}
			}
		}
	}
`;

const ContainerElement = styled.div`
	${ContainerStyle};

	.information {
		${ListContainer}
	}
`;

const PriceRangeContainer = styled.div`
	${ContainerStyle};

	.information {
		position: relative;

		.input-range {
			margin-top: 20px;
		}

		.range-value {
			position: absolute;
			top: 40px;
			left: -6px;
		}
	}
`;

const S = {
	AirTicketsAsideContainer,
	AirlinesContainer,
	ContainerElement,
	PriceRangeContainer,
};

export default S;
