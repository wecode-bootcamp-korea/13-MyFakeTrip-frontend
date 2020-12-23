import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import RecommendCard from './RecommendCard/RecommendCard.component';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CARDIMG = 'http://localhost:3000/data/hoteldata.json';

function Recommend(props) {
	const [cardImg, setCardImg] = useState('');
	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};

	useEffect(() => {
		fetch(CARDIMG)
			.then((res) => res.json())
			.then((res) => setCardImg(res.recommendimg));
	}, []);

	return (
		<RecommendCon>
			<h2>여행자들이 함께 본 상품</h2>
			<SliderWrap>
				<Slider {...settings} className="slider">
					{cardImg &&
						cardImg.map((card, idx) => {
							return (
								<div key={idx}>
									<RecommendCard card={card} />
								</div>
							);
						})}
				</Slider>
			</SliderWrap>
		</RecommendCon>
	);
}

export default Recommend;

const RecommendCon = styled.section`
	h2 {
		margin-top: 0;
		margin-bottom: 16px;
		color: #343a40;
		font-size: 22px;
		font-weight: 700;
		line-height: 1.36;
	}

	div {
		.slider {
			cursor: pointer;

			.slick-prev {
				background: url('https://icons-for-free.com/iconfiles/png/512/chevron+left-131965017381493788.png');
				background-repeat: no-repeat;
				background-size: 40px 40px;
				background-position: center;
			}

			.slick-next {
				background: url('https://icons-for-free.com/iconfiles/png/512/chevron+right-131965017384399251.png');
				background-repeat: no-repeat;
				background-size: 40px 40px;
				background-position: center;
			}

			.slick-prev,
			.slick-next {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				color: red;
				box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05),
					0 2px 6px 0 rgba(0, 0, 0, 0.05), 0 4px 12px 0 rgba(0, 0, 0, 0.05);
				background-color: white;
				z-index: 10;
				&:before {
					width: 50px;
					height: 50px;
					border-radius: 50%;
					background-size: 10px 10px;
					position: relative;
					top: 4px;
					opacity: 0;
				}
				&:hover {
					box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15),
						0 2px 6px 0 rgba(0, 0, 0, 0.15), 0 4px 12px 0 rgba(0, 0, 0, 0.15);
				}
			}
		}
	}
`;

const SliderWrap = styled.div`
	display: inline;
`;
