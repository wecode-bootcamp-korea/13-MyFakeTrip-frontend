import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HotelListBar from './HotelListBar/HotelListBar.component';
import HotelListMainLeft from './HotelListMain/HotelListMainLeft/HotelListMainLeft.component';
import HotelListMainRight from './HotelListMain/HotelListMainRight/HotelListMainRight.component';

import { HOTELS } from '../../config';
import HotelLoading from './HotelListMain/WithHotelLoading/HotelLoading/HotelLoading.component';
import WithHotelLoading from './HotelListMain/WithHotelLoading/LodingBackground.component';

let theme, star, convenience;

const HotelList = () => {
	const [count, setCount] = useState({
		roomCount: 1,
		adultCount: 1,
		childCount: 0,
	});

	const [loading, setLoading] = useState(true);

	const [convenienceCheck, setConvenienceCheck] = useState({
		bagCheck: false,
		breakfast: false,
		fitness: false,
		reseption: false,
		business: false,
		laundry: false,
		restaurant: false,
		pool: false,
		spa: false,
	});

	const [themeCheck, setThemeCheck] = useState([
		true,
		false,
		false,
		false,
		false,
	]);

	const [pageCheck, setPageCheck] = useState([
		false,
		false,
		false,
		false,
		false,
	]);

	const [starCheck, setStarCheck] = useState({
		oneStar: false,
		twoStar: false,
		threeStar: false,
		fourStar: false,
		fiveStar: false,
	});

	const [filterButton, setfilterButton] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	const [dynamicSlider, setDynamicSlider] = useState({
		dynamicValue: [],
	});

	const [hotelList, setHotelList] = useState([]);

	const [hotelTotal, setHotelTotal] = useState();

	const [reverseSlider, setReverseSlider] = useState({
		min: 0,
		max: 10,
		reverseValue: '',
	});

	const [region, setRegion] = useState('');

	const [regionArr, setRegionArr] = useState();

	const handleRegion = (e) => {
		console.log('e.target => ', e.target.dataset.name);
		setRegion(e.target.dataset.name);
	};

	const handlePageCheck = (num) => {
		const tempCheck = [false, false, false, false, false];
		tempCheck[num] = true;
		setPageCheck(tempCheck);
	};

	const handleConvenienceCheck = (e) => {
		const convenienceBox = [];
		const convenienceObj = {
			...convenienceCheck,
			[e.currentTarget.name]: !convenienceCheck[e.currentTarget.name],
		};
		setConvenienceCheck(convenienceObj);
		for (let i = 0; i < 8; i++) {
			if (Object.values(convenienceObj)[i]) {
				convenienceBox.push(`&${`convenience=${i + 1}`}`);
			}
		}
		convenience = `${convenienceBox.join('')}`;

		// ${HOTELS}?region={}&${star}&${convenience}

		fetch(
			`${HOTELS}?${star !== undefined ? star : ''}${
				convenience !== undefined ? convenience : ''
			}`,
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setHotelList(result.hotels);
				setHotelTotal(result.total_hotels);
			});
	};

	const handleThemeCheck = (num) => {
		setConvenienceCheck({
			...convenienceCheck,
			bagCheck: false,
			breakfast: false,
			fitness: false,
			reseption: false,
			business: false,
			laundry: false,
			restaurant: false,
			pool: false,
			spa: false,
		});
		setfilterButton([false, false, false, false, false, false]);
		const tempCheck = [false, false, false, false, false];
		tempCheck[num] = true;
		setThemeCheck(tempCheck);
		// 모든게 다 갖춰지면 아래 API
		// ${HOTELS}?region={}&date={}&mans={}&theme={}
		theme = num;

		console.log('테마', theme);

		if (theme !== 0) {
			fetch(`${HOTELS}?theme=${theme}`)
				.then((response) => response.json())
				.then((result) => {
					setHotelList(result.hotels);
					setHotelTotal(result.total_hotels);
				});
		}
		if (theme === 0) {
			fetch(`${HOTELS}`)
				.then((response) => response.json())
				.then((result) => {
					setHotelList(result.hotels);
					setHotelTotal(result.total_hotels);
				});
		}
	};

	const handleStarCheck = (e) => {
		setfilterButton([false, false, false, false, false, false]);
		const starBox = [];
		const starObj = {
			...starCheck,
			[e.currentTarget.name]: !starCheck[e.currentTarget.name],
		};
		setStarCheck(starObj);
		for (let i = 0; i < 5; i++) {
			if (Object.values(starObj)[i]) {
				starBox.push(`&${`star=${i + 1}`}`);
			}
		}
		star = `${starBox.join('')}`;

		// ${HOTELS}?region={}&${star}&${convenience}

		fetch(
			`${HOTELS}?${star !== undefined ? star : ''}${
				convenience !== undefined ? convenience : ''
			}`,
		)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setHotelList(result.hotels);
				setHotelTotal(result.total_hotels);
			});
	};

	const handleFilterButton = (num) => {
		const tempCheck = [false, false, false, false, false, false];
		tempCheck[num] = true;
		setfilterButton(tempCheck);

		const filterName = [
			'recommend',
			'price_low',
			'price_high',
			'score',
			'distance',
			'star',
		];

		// ${HOTELS}?region={}&${star}&${convenience}
		// 모든게 다 갖춰지면 아래 API
		// ${HOTELS}?region={}&theme={}&${star}&${convenience}&order_by=${filterName[num]}

		if (theme !== undefined) {
			fetch(` ${HOTELS}?theme=${theme}&order_by=${filterName[num]}`)
				.then((response) => response.json())
				.then((result) => {
					console.log(`result => ${result}`);
					setHotelList(result.hotels);
					setHotelTotal(result.total_hotels);
				});
		} else {
			fetch(
				`${HOTELS}?${star !== undefined ? star : ''}${
					convenience !== undefined ? convenience : ''
				}&order_by=${filterName[num]}`,
			)
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					setHotelList(result.hotels);
					setHotelTotal(result.total_hotels);
				});
		}
	};

	const handleReverseSlider = (value) => {
		setReverseSlider({ ...reverseSlider, reverseValue: value });
		console.log(10 - value);
	};

	const handleDynamicSlider = (value) => {
		setDynamicSlider({ ...dynamicSlider, dynamicValue: value });
	};

	const handlePagination = (e) => {
		const LIMIT = 10;
		const offSet = 10 * e.target.dataset.idx;

		fetch(`${HOTELS}?limit=${LIMIT}&offset=${offSet}`)
			.then((response) => response.json())
			.then((result) => setHotelList(result.hotels));
	};

	const cdmFetch = () => {
		setLoading(true);
		fetch(HOTELS).then((response) =>
			response.json().then((result) => {
				setHotelList(result.hotels);
				setHotelTotal(result.total_hotels);
				setRegionArr(result.region);
				setLoading(false);
			}),
		);
	};

	const handleIncreaseButton = (e) => {
		setCount({
			...count,
			[e.currentTarget.name]: count[e.currentTarget.name] + 1,
		});
	};

	const handleDecreaseButton = (e) => {
		if (
			e.currentTarget.name === 'roomCount' &&
			count[e.currentTarget.name] > 1
		) {
			setCount({
				...count,
				[e.currentTarget.name]: count[e.currentTarget.name] - 1,
			});
		}
		if (
			e.currentTarget.name === 'adultCount' &&
			count[e.currentTarget.name] > 1
		) {
			setCount({
				...count,
				[e.currentTarget.name]: count[e.currentTarget.name] - 1,
			});
		}
		if (
			e.currentTarget.name === 'childCount' &&
			count[e.currentTarget.name] >= 1
		) {
			setCount({
				...count,
				[e.currentTarget.name]: count[e.currentTarget.name] - 1,
			});
		}
	};

	useEffect(() => {
		cdmFetch();
	}, []);

	console.log('loading =>', loading);

	return (
		<section>
			<WithHotelLoading loadingState={loading} />
			<HotelListBar
				countData={count}
				regionData={region}
				regionArrData={regionArr}
				onRegion={handleRegion}
				onIncrease={handleIncreaseButton}
				onDecrease={handleDecreaseButton}
			/>
			<Container>
				<HotelListMainLeft
					onConvenienceCheck={handleConvenienceCheck}
					onThemeCheck={handleThemeCheck}
					onStarCheck={handleStarCheck}
					onReverseSlider={handleReverseSlider}
					onDynamicSlider={handleDynamicSlider}
					reverseSliderData={reverseSlider}
					dynamicSliderData={dynamicSlider}
					starData={starCheck}
					optionData={convenienceCheck}
					themeData={themeCheck}
					hotelData={hotelList}
				/>
				<HotelListMainRight
					onFilterButton={handleFilterButton}
					onPagination={handlePagination}
					onPageCheck={handlePageCheck}
					pageCheckData={pageCheck}
					filterData={filterButton}
					hotelData={hotelList}
					hotelNumbers={hotelTotal}
				/>
			</Container>
		</section>
	);
};

export default HotelList;

const Container = styled.div`
	max-width: 70%;
	display: flex;
	margin: 0 auto;
`;
