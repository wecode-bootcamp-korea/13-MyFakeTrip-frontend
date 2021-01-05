import React from 'react';
import styled, { css } from 'styled-components';
import { FaStar, FaRegStar } from 'react-icons/fa';

function RecommendCard({ card }) {
	const toggleHeartColor = (e) => {
		let heartClassName = e.target.className;
		e.target.className =
			heartClassName === 'far fa-heart' ? 'fas fa-heart' : 'far fa-heart';
	};

	return (
		<CardCon>
			<ShadowBox>
				<div>
					<HeadImage card={card} />
				</div>
				<ContentWrap>
					<div className="small-title">{card.type}</div>
					<h3>{card.title}</h3>
					<div>
						<StarWrap>
							{Array.from({ length: card.star }, (_, key) => (
								<StarFull key={key} />
							))}
							{Array.from({ length: 5 - card.star }, (_, key) => (
								<Star key={key} />
							))}
							<span>{card.star}</span>
						</StarWrap>
						<PriceWrap>
							<span>
								{new Intl.NumberFormat().format(card.price)}
								<span>원</span>
							</span>
							<span className="nights"> / 1박</span>
						</PriceWrap>
					</div>
				</ContentWrap>
			</ShadowBox>
			<WishWrap>
				<i className="far fa-heart" onClick={toggleHeartColor} />
			</WishWrap>
		</CardCon>
	);
}

export default RecommendCard;

const CardCon = styled.div`
	width: 228px;
	transition: box-shadow 0.15s ease-out;
	&:after {
	}

	div {
		position: relative;
	}
`;

const ShadowBox = styled.div`
	transition: 2.5;
	&:hover {
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 6px 0 rgba(0, 0, 0, 0.15),
			0 4px 12px 0 rgba(0, 0, 0, 0.15);
	}
`;

const HeadImage = styled.div`
	background-image: url(${(props) => props.card.url});
	background-position: center;
	background-size: 100% 100%;
	width: 100%;
	height: 166px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	display: inline-block;
	position: relative;
	vertical-align: middle;
`;

const ContentWrap = styled.div`
	height: 145px;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.16);
	border-bottom-left-radius: 4px;
	border-bottom-right-radius: 4px;
	padding: 10px 16px 16px;
	position: relative;

	.small-title {
		margin-bottom: 4px;
		color: #848c94;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	h3 {
		width: 100%;
		margin-bottom: 12px;
		color: #343a40;
		font-weight: 600;
		font-size: 15px;
		line-height: 1.47;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;

const StarWrap = styled.div`
	margin-bottom: 8px;
	display: inline-block;
	position: relative;
	line-height: 1;
	vertical-align: middle;

	span {
		margin-left: 4px;
		color: #848c94;
		font-size: 12px;
		vertical-align: middle;
	}
`;

const StarStyle = css`
	width: 12px;
	height: 12px;
	color: ${(props) => props.theme.colors.mainBlue};
`;

const Star = styled(FaRegStar)`
	${StarStyle}
`;

const StarFull = styled(FaStar)`
	${StarStyle}
`;

const PriceWrap = styled.div`
	span {
		color: #666d75;
		font-size: 14px;
		font-weight: 500;

		span {
			font-size: 13px;
		}
	}

	.nights {
		margin-left: 2px;
		color: #848c94;
		font-size: 12px;
	}
`;

const WishWrap = styled.div`
	position: absolute;
	bottom: 300px;
	left: 200px;
	cursor: pointer;

	i {
		transition: 0.3s;
		color: crimson;

		&:active {
			transform: scale(1.5);
			color: crimson;
		}
	}
`;
