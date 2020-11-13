import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Select from './Select.component';

function Main() {
	var settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<Content>
			<Select />
			<Container>
				<Slider {...settings}>
					<div className="container-image">
						<img
							src="https://js.skyscnr.com/sttc/oc-registry/components/flexible-travel/0.0.18/build//static/media/Flex_Flights.94daa26e.svg"
							alt="flights"
						/>
						<h3>항공권</h3>
						<p>
							많은 항공사에서는 추후 항공권 변경 및 취소에도 손해가 없는 새로운
							정책을 도입했습니다.
						</p>
						<a href="#">변경 가능한 티켓 찾아보기</a>
					</div>
					<div className="container-image">
						<img
							src="https://js.skyscnr.com/sttc/oc-registry/components/flexible-travel/0.0.18/build//static/media/Flex_Hotels.8105ae2d.svg"
							alt="hotels"
						/>
						<h3>호텔</h3>
						<p>
							숙박 계획을 여유롭게 잡으세요. 지금 예약하더라도, 나중에
							확실해지면 그때 가서 확정할 수 있습니다.
						</p>
						<a href="#">무료 취소 가능한 호텔 보기</a>
					</div>
					<div className="container-image">
						<img
							src="https://js.skyscnr.com/sttc/oc-registry/components/flexible-travel/0.0.18/build//static/media/Flex_Cars.43fb1933.svg"
							alt="cars"
						/>
						<h3>렌터카</h3>
						<p>
							여유 있게 여행을 계획하세요. 대부분 업체에서 48시간 이내까지 무료
							취소, 또는 저렴한 금액으로 취소가 가능합니다.
						</p>
						<a href="#">예약 취소가 자유로운 렌터카 찾기</a>
					</div>
					<div className="container-image">
						<img
							src="https://js.skyscnr.com/sttc/oc-registry/components/flexible-travel/0.0.18/build//static/media/Flex_Hotels.8105ae2d.svg"
							alt="hotels"
						/>
						<h3>호텔</h3>
						<p>
							숙박 계획을 여유롭게 잡으세요. 지금 예약하더라도, 나중에
							확실해지면 그때 가서 확정할 수 있습니다.
						</p>
						<a href="#">무료 취소 가능한 호텔 보기</a>
					</div>
				</Slider>
			</Container>
		</Content>
	);
}

const Content = styled.div`
	width: 100%;
	height: 630px;
	padding: 80px 110px;
`;
const Container = styled.div`
	margin-top: 100px;
	text-align: center;
	.container-image {
		height: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 36px;
		> img {
			position: relative;
			left: 110px;
			width: 300px;
			height: 250px;
		}
		h3 {
			margin: 40px 0;
			font-size: 30px;
			font-weight: 600;
		}
		p {
			font-size: 23px;
			color: gray;
			margin: 30px 0;
			line-height: 30px;
		}
		a {
			font-weight: 600;
			font-size: 22px;
			color: dodgerblue;
		}
	}
`;
export default Main;
