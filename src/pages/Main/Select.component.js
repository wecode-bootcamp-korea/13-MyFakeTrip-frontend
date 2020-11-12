import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Select() {
	return (
		<Wrapper>
			<h1>국내여행, 떠나볼까요?</h1>
			<Container>
				<City>
					<div className="jeju">제주도</div>
					<div>서울</div>
					<div>강원도</div>
					<div>부산</div>
				</City>
				<Icons>
					<Link to="/airtickets">
						<div>
							<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/1_original_1592284599.png?1592284599" />
							<p>항공권</p>
						</div>
					</Link>
					<Link to="/hotellist">
						<div>
							<span>12%캐시백</span>
							<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/2_original_1596704107.png?1596704107" />
							<p>호텔예약</p>
						</div>
					</Link>
					<div>
						<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/4_original_1592284718.png?1592284718" />
						<p>감성숙소</p>
					</div>
					<div>
						<span>25%할인</span>
						<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/3_original_1592284680.png?1592284680" />
						<p>렌터카&교통</p>
					</div>
					<div>
						<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/35_original_1595313360.png?1595313360" />
						<p>제주투어&티켓</p>
					</div>
					<div>
						<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/44_original_1604557435.png?1604557435" />
						<p>힐링제주</p>
					</div>
					<div>
						<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/45_original_1604557455.png?1604557455" />
						<p>베스트셀러</p>
					</div>
					<div>
						<img src="https://d2ur7st6jjikze.cloudfront.net/cms_icons/8_original_1592284823.png?1592284823" />
						<p>전체보기</p>
					</div>
				</Icons>
			</Container>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	height: 350px;
	h1 {
		font-size: 30px;
		text-align: center;
		font-weight: 600;
	}
`;
const Container = styled.div`
	border-radius: 10px;
	box-shadow: 5px 10px 5px 5px rgba(0, 0, 0, 0.1);
	margin: 40px;
`;
const City = styled.div`
	.jeju {
		background-color: rgba(0, 0, 0, 0.01);
		color: rgba(0, 0, 0, 0.8);
	}
	display: flex;
	div {
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		width: 25%;
		padding-top: 10px;
		height: 50px;
		background-color: rgba(0, 0, 0, 0.05);
		color: #666d75;
		font-size: 18px;
		text-align: center;
		font-weight: 700;
	}
`;
const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	a {
		color: #495056;
	}
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
		span {
			position: absolute;
			top: 0px;
			background-color: #fa5b4a;
			border-radius: 7px;
			padding: 2px;
			font-size: 8px;
			color: #ffffff;
		}
		img {
			width: 60px;
			margin: 20px;
		}
		p {
			color: #495056;
			font-size: 14px;
			font-weight: 400;
		}
	}
`;
export default Select;
