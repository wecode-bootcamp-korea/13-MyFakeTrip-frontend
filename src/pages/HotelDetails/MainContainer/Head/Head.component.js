import React from 'react';
import styled from 'styled-components';
import { MapMarkerAlt } from '@styled-icons/fa-solid/MapMarkerAlt';
import { Star, StarFill } from '@styled-icons/bootstrap';

function Head() {
	return (
		<HeadCon>
			<Wrap>
				<StartWrap>
					<StarFull />
					<StarFull />
					<StarFull />
					<StarFull />
					<StarEmpty />
				</StartWrap>
				<NameKor>제주신라호텔</NameKor>
				<NameEng>The Shilla Jeju</NameEng>
				<Address>
					<MapMarker />
					중문관광로 72번길
				</Address>
			</Wrap>

			<Wrap rating>
				<RatingText>
					<h3>우수함</h3>
					<p>1,770개의 이용후기</p>
				</RatingText>
				<RatingBox>
					<div>8.9</div>
				</RatingBox>
			</Wrap>
		</HeadCon>
	);
}

export default Head;

const HeadCon = styled.header`
	margin-bottom: 40px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const Wrap = styled.div`
	display: ${(props) => (props.rating ? 'flex' : null)};
`;

const StartWrap = styled.div``;

const StarEmpty = styled(Star)`
	width: 12px;
	height: 12px;
	color: rgba(255, 211, 0, 1);
`;

const StarFull = styled(StarFill)`
	width: 12px;
	height: 12px;
	color: rgba(255, 211, 0, 1);
`;

const NameKor = styled.h1`
	margin-top: 10px;
	color: #343a40;
	font-size: 32px;
	font-weight: 700;
	line-height: 40px;
`;
const NameEng = styled.p`
	margin-top: 4px;
	color: #666d75;
	font-size: 15px;
	line-height: 16px;
`;
const Address = styled.address`
	margin-top: 16px;
	color: #848c94;
	font-size: 13px;
	line-height: 16px;
`;

const MapMarker = styled(MapMarkerAlt)`
	width: 13px;
	height: 13px;
`;

const RatingText = styled.div`
	margin-right: 12px;
	h3 {
		color: #003580;
		font-size: 16px;
		font-weight: 600;
		line-height: 20px;
	}
	p {
		color: #848c94;
		font-size: 12px;
		line-height: 20px;
	}
`;

const RatingBox = styled.div`
	width: 40px;
	height: 40px;
	font-size: 18px;
	font-weight: 600;
	line-height: 40px;
	div {
		border-radius: 4px;
		color: white;
		background-color: #003580;
		text-align: center;
	}
`;
