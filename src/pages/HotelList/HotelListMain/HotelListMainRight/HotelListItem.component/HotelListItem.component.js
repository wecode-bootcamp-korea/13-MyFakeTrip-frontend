import React from 'react';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';

const HotelListItem = ({ hotelData, history }) => {
	const price = hotelData && parseInt(hotelData.price);
	const original = hotelData && parseInt(hotelData.price).toLocaleString();

	const goToDetail = () => {
		history.push(`/hoteldetails/${hotelData.id}`);
	};

	return (
		<Section onClick={goToDetail}>
			<div>
				<Imeage src={hotelData.thumbnail} />
			</div>
			<DescriptionDiv>
				<HotelInfo>
					<span>{hotelData && hotelData.name}</span>
					<span>{`도심에서 30.4m • ${hotelData && hotelData.star}성급`}</span>
				</HotelInfo>
				<HotelReview>
					<div>8.9</div>
					<div>
						<span>우수함</span>
						<span>1,779개의 이용 후기</span>
					</div>
				</HotelReview>
			</DescriptionDiv>
			<PriceDiv>
				<div>
					<span>최저가</span>
					<del>{original}원</del>
					<p>{`추가할인 ${Math.floor(
						Number(price) * 0.1,
					).toLocaleString()}원`}</p>
				</div>
				<div>
					<p>세금포함</p>
					<span>
						1박 총
						<span>{`  ${Math.ceil(
							Number(price) * 0.9,
							4,
						).toLocaleString()}`}</span>
						원
					</span>
				</div>
			</PriceDiv>
		</Section>
	);
};

export default withRouter(HotelListItem);

const Section = styled.section`
	display: flex;
	width: 95%;
	margin-top: 18px;
	position: relative;
	height: 160px;
	border: 1px solid #ccc;
	div {
		&:first-child {
			flex: 1;
		}
	}
	&:hover {
		border: 1px solid grey;
	}
`;

const Imeage = styled.img`
	width: 100%;
	height: 100%;
`;

const DescriptionDiv = styled.div`
	flex: 1.5;
	display: block;
	padding: 16px 0 16px 16px;
`;

const HotelInfo = styled.div`
	span {
		display: block;
		&:first-child {
			font-size: 18px;
			font-weight: 600;
		}
	}
`;

const HotelReview = styled.div`
	padding-top: 39px;
	display: flex;
	align-items: center;
	div {
		&:first-child {
			margin-right: 4px;
			padding: 3px 1px;
			border-radius: 4px 4px 4px 0;
			background-color: #273c75;
			color: white;
			font-size: 16px;
			font-weight: 600;
			line-height: 28px;
			text-align: center;
		}
		&:last-child {
			flex: 8;
		}
		span {
			display: block;
			font-size: 12px;
			&:first-child {
				color: #273c75;
				font-weight: 600;
			}
		}
	}
`;

const PriceDiv = styled.div`
	border-left: 1px solid #ccc;
	height: 80%;
	align-self: center;
	flex: 1;
	div {
		width: 80%;
		height: 50%;
		margin: 0 auto;
		text-align: end;
		&:first-child {
			border-bottom: 1px solid #ccc;
			p {
				background-color: #ffcccc;
				color: red;
				width: 80%;
				border-radius: 8px;
				font-weight: 600;
				margin: 8px 0 4px auto;
			}
		}
		&:last-child {
			p {
				padding-top: 8px;
				margin: 0;
			}
			span {
				span {
					font-size: 21px;
					font-weight: 600;
				}
			}
		}
	}
`;
