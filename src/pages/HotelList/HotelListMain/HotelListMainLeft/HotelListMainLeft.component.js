import React from 'react';

import styled, { css } from 'styled-components';

import FilterButton from './FilterButton/FilterButton.component';
import CheckRoomStyle from './CheckRoomStyle/CheckRoomStyle.component';
import CheckStarRating from './CheckStarRating/CheckStarRating.component';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

const HotelListMainLeft = ({
	onConvenienceCheck,
	onThemeCheck,
	onStarCheck,
	onReverseSlider,
	onDynamicSlider,
	reverseSliderData,
	dynamicSliderData,
	starData,
	optionData,
	themeData,
	hotelData,
}) => {
	const handleConvenienceCheck = (e) => {
		onConvenienceCheck(e);
	};

	const handleThemeCheck = (num) => {
		onThemeCheck(num);
	};

	const handleStarCheck = (e) => {
		onStarCheck(e);
	};

	const handleReverseSlider = (value) => {
		onReverseSlider(value);
	};

	const handleDynamicSlider = (value) => {
		onDynamicSlider(value);
	};

	const ReverseText =
		reverseSliderData.reverseValue === 10
			? `0점 - 10점`
			: `${10 - reverseSliderData.reverseValue}점 이상`;

	const priceArray = hotelData.map((item) => item.price).sort((a, b) => b - a);

	const minPrice =
		priceArray.length !== 0 && parseInt(priceArray[priceArray.length - 1]);

	const maxPrice = priceArray.length !== 0 && parseInt(priceArray[0]);

	const minDynamic =
		dynamicSliderData.dynamicValue.length !== 0 &&
		dynamicSliderData.dynamicValue[0];

	const maxDynamic =
		dynamicSliderData.dynamicValue.length !== 0 &&
		dynamicSliderData.dynamicValue[1];

	// aria-disabled={themeData}
	// console.log('theme =>', themeData.includes(true));

	return (
		<Container big>
			<Button map>
				<span>
					<i className="fas fa-map-marker-alt" />
					지도로 보기
				</span>
			</Button>
			<Container hash>
				<span>테마</span>
				<Button hash onClick={() => handleThemeCheck(0)} onOff={themeData[0]}>
					<i className="fas fa-th-large"></i>
					<span>전체</span>
				</Button>
				<Button hash onClick={() => handleThemeCheck(1)} onOff={themeData[1]}>
					<span>#</span>
					<span>갓성비 호텔</span>
				</Button>
				<Button hash onClick={() => handleThemeCheck(2)} onOff={themeData[2]}>
					<span>#</span>
					<span>오션뷰 호텔</span>
				</Button>
				<Button hash onClick={() => handleThemeCheck(3)} onOff={themeData[3]}>
					<span>#</span>
					<span>수영장 호텔</span>
				</Button>
				<Button hash onClick={() => handleThemeCheck(4)} onOff={themeData[4]}>
					<span>#</span>
					<span>럭셔리 호캉스</span>
				</Button>
			</Container>
			<Container filterBox onOff={themeData[0] === false ? true : false}>
				<BlurBox onOff={themeData[0] === false ? true : false} />
				<header>
					<span>필터</span>
					<button>전체 초기화</button>
				</header>
				<Container filterContent>
					<span>평점</span>
					<span>{ReverseText}</span>
					<Slider
						reverse
						max={reverseSliderData.max}
						min={reverseSliderData.min}
						step={0.5}
						handleStyle={[
							{
								backgroundColor: 'white',
								border: '2px solid #3f3480',
								boxShadow: 'none',
							},
						]}
						trackStyle={[{ backgroundColor: '#3f3480' }]}
						onChange={handleReverseSlider}
					/>
				</Container>
				<Container filterContent>
					<span>총 숙박 요금</span>
					{minPrice && (
						<span>{`${
							minDynamic
								? minDynamic.toLocaleString()
								: minPrice.toLocaleString()
						}원 ~ ${
							maxDynamic
								? maxDynamic.toLocaleString()
								: maxPrice.toLocaleString()
						}원`}</span>
					)}
					{minPrice && (
						<Range
							defaultValue={[minPrice, maxPrice]}
							min={minPrice}
							max={maxPrice}
							onChange={handleDynamicSlider}
							handleStyle={[
								{
									backgroundColor: 'white',
									border: '2px solid #3f3480',
									boxShadow: 'none',
								},
								{
									backgroundColor: 'white',
									border: '2px solid #3f3480',
									boxShadow: 'none',
								},
							]}
							trackStyle={[{ backgroundColor: '#3f3480' }]}
						/>
					)}
				</Container>
				<Container filterContent>
					<span>호텔 등급</span>
					<span>전체 등급</span>
					<CheckStarRating onStarCheck={handleStarCheck} starData={starData} />
				</Container>
				<Container filterContent>
					<span>편의 시설</span>
					<FilterButton
						onConvenienceCheck={handleConvenienceCheck}
						optionData={optionData}
					/>
				</Container>
				<Container filterContent>
					<span>숙소 유형</span>
					<CheckRoomStyle />
				</Container>
			</Container>
		</Container>
	);
};

export default HotelListMainLeft;

const Container = styled.div`
	display: block;
	${(props) =>
		props.big &&
		css`
			flex: 1;
		`}
	${(props) =>
		props.hash &&
		css`
			border-bottom: 1px solid #ccc;
			padding-bottom: 24px;
			i {
				margin: 0 12px;
			}
			span {
				display: inline-block;
				margin-top: 18px;
				font-size: 18px;
				font-weight: 600;
			}
		`}
		${(props) =>
		props.filterBox &&
		css`
			position: relative;
			padding: 12px 0;
			opacity: ${(props) => (props.onOff ? 0.7 : 1)};
			header {
				display: flex;
				padding: 12px 0 24px 0;
				border-bottom: 1px solid #ccc;
				justify-content: space-between;
				align-items: center;
				span {
					font-size: 18px;
					font-weight: 600;
				}
				button {
					border: none;
					background-color: transparent;
					color: #74b9ff;
				}
			}
		`}
	${(props) =>
		props.filterContent &&
		css`
			padding-bottom: 8px;
			border-bottom: 1px solid #ccc;
			span {
				display: block;
				&:first-child {
					padding-top: 8px;
					font-size: 16px;
					font-weight: 600;
				}
				&:nth-child(2) {
					padding: 8px 0;
				}
				&:last-child {
					padding: 8px 0;
				}
			}
			&:last-child {
				border: 0;
			}
		`}
`;

const Button = styled.button`
	display: block;
	width: 100%;
	${(props) =>
		props.map &&
		css`
			margin-top: 18px;
			padding: 16px 8px;
			border-radius: 4px;
			font-size: 18px;
			color: #0984e3;
			opacity: 0.6;
			border: 1px solid #ccc;
			background-image: url('https://media.vlpt.us/images/deokyeong1020/post/d7153b08-e872-413f-8be2-09dfb4194c64/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-11-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.39.39.png');
			span {
				opacity: 1;
			}
			i {
				padding-right: 4px;
			}
			&:hover {
				opacity: 1;
				border-color: gray;
			}
		`}
	${(props) =>
		props.hash &&
		css`
			border-radius: 20px;
			border: 1px solid ${(props) => (props.onOff ? '#42a5f5' : '#ccc')};
			margin-top: 8px;
			padding: 12px 8px;
			color: ${(props) => (props.onOff ? '#42a5f5' : 'gray')};
			text-align: start;
			font-weight: ${(props) => (props.onOff ? '600' : '400')};
			background-color: ${(props) => (props.onOff ? '#bbdefb' : 'white')};
			span {
				font-size: 16px;
				margin-top: 0;
				&:first-child {
					margin: 0 16px;
				}
			}
		`}
`;

const BlurBox = styled.div`
	display: ${(props) => (props.onOff ? 'block' : 'none')};
	position: absolute;
	background-color: #ccc;
	border-radius: 4px;
	top: 0;
	right: -7px;
	width: 104%;
	height: 900px;
	z-index: 100;
	opacity: 0.4;
`;
