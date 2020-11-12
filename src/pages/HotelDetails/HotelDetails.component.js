import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainContainer from './MainContainer/MainContainer.component';
import SideBarMain from './SideBarMain/SideBarMain.component';
import { API, MOCK, REVIEWAPI } from '../../config';
// Check state
import { getTotalPrice } from '../../redux/hotels/hotels.actions';

function HotelDetails({ match, history, getTotalPrice }) {
	const [hotelDetailData, setHotelDetailData] = useState(null);
	const [reviewData, setReviewData] = useState(null);
	const [optionPrice, setOptionPrice] = useState([]);

	const [basicPrice, setBasicPrice] = useState(0);
	const [totalPrice, setTotalPrice] = useState('');

	const [adultCount, setAdultCount] = useState(0);
	const [childCount, setChildCount] = useState(0);

	const [roomCount, setRoomCount] = useState({
		standard: { double: 0, twin: 0 },
		delux: { double: 0, twin: 0 },
		suite: 0,
	});

	const [dates, setDates] = useState('');

	const [averageRating, setAverageRating] = useState();

	// useEffect(() => {
	// 	// 호텔별 디테일 fetch
	// 	fetch(MOCK)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setHotelDetailData(res);
	// 			setOptionPrice(res.hotel_add_prices);
	// 			setTotalPrice(
	// 				new Intl.NumberFormat().format(res.hotel_detail.basic_price),
	// 			);
	// 			setBasicPrice(Number(res.hotel_detail.basic_price));
	// 		});
	// 	// 리뷰받는 fetch
	// 	fetch(REVIEWAPI)
	// 		.then((res) => res.json())
	// 		.then((res) => setReviewData(res));
	// }, []);

	useEffect(() => {
		// 호텔 디테일 fetch
		fetch(`${API}/${match.params.id}`, {
			// headers: { Authorization: token },
		})
			.then((res) => res.json())
			.then((res) => setHotelDetailData(res));
		// 리뷰받는 fetch
		fetch(`${REVIEWAPI}/${match.params.id}`)
			.then((res) => res.json())
			.then((res) => setReviewData(res));
	}, []);

	const goToResult = () => {
		getTotalPrice(Number(totalPrice.replace(',', '')));
		history.push('/purchase/hotels');
	};

	const getTotal = () => {
		const deluxDoublePrice = +optionPrice[2];
		const deluxTwinPrice = +optionPrice[3];
		const suitePrice = +optionPrice[4];
		const totalPrice =
			basicPrice * dates +
			deluxDoublePrice * roomCount.delux.double +
			deluxTwinPrice * roomCount.delux.twin +
			suitePrice * roomCount.suite;
		const formatter = new Intl.NumberFormat().format(totalPrice);
		setTotalPrice(formatter);
	};

	const isIncreasePeopleCount = (increase, targetCount, type) => {
		const isAdult = type === 'adult';
		const setCount = isAdult ? setAdultCount : setChildCount;
		const count = isAdult ? adultCount : childCount;

		if (targetCount === 0 && !increase) return;
		increase ? setCount(count + 1) : setCount(count - 1);
	};

	const isIncreaseRoomCount = (increase, targetRoomCount, type) => {
		if (!increase && targetRoomCount === 0) return;

		if (type === 'standardDouble') {
			increase
				? setRoomCount({
						...roomCount,
						standard: {
							...roomCount.standard,
							double: roomCount.standard.double + 1,
						},
				  })
				: setRoomCount({
						...roomCount,
						standard: {
							...roomCount.standard,
							double: roomCount.standard.double - 1,
						},
				  });
		} else if (type === 'standardTwin') {
			increase
				? setRoomCount({
						...roomCount,
						standard: {
							...roomCount.standard,
							twin: roomCount.standard.twin + 1,
						},
				  })
				: setRoomCount({
						...roomCount,
						standard: {
							...roomCount.standard,
							twin: roomCount.standard.twin - 1,
						},
				  });
		} else if (type === 'deluxDouble') {
			increase
				? setRoomCount({
						...roomCount,
						delux: { ...roomCount.delux, double: roomCount.delux.double + 1 },
				  })
				: setRoomCount({
						...roomCount,
						delux: { ...roomCount.delux, double: roomCount.delux.double - 1 },
				  });
		} else if (type === 'deluxTwin') {
			increase
				? setRoomCount({
						...roomCount,
						delux: { ...roomCount.delux, twin: roomCount.delux.twin + 1 },
				  })
				: setRoomCount({
						...roomCount,
						delux: { ...roomCount.delux, twin: roomCount.delux.twin - 1 },
				  });
		} else {
			increase
				? setRoomCount({ ...roomCount, suite: roomCount.suite + 1 })
				: setRoomCount({ ...roomCount, suite: roomCount.suite - 1 });
		}
	};

	const calculateDates = (targetDate) => {
		const start = targetDate.split(' - ')[0];
		const end = targetDate.split(' - ')[1];
		const checkInMonth = +start.split('/')[0];
		const checkOutMonth = +end.split('/')[0];
		const checkInDay = +start.split('/')[1];
		const checkOutDay = +end.split('/')[1];

		if (checkInMonth === checkOutMonth) {
			const days = checkOutDay - checkInDay;
			return setDates(days);
		}
		if (checkInMonth % 2 === 0) {
			const days = 31 - checkInDay + checkOutDay;
			return setDates(days);
		} else if (checkInMonth % 2 !== 0) {
			const days = 30 - checkInDay + checkOutDay;
			return setDates(days);
		}
	};

	const calculateAverage = () => {
		if (!reviewData) return;
		const ratingArr = reviewData.review_list.map((review) => {
			return review.rating;
		});

		setAverageRating(
			ratingArr.reduce((acc, cur) => acc + cur, 0) / ratingArr.length,
		);
	};

	useEffect(() => {
		getTotal();
		calculateAverage();
	}, [reviewData]);

	return (
		<section className="HotelDetails">
			<div className="hello"></div>
			<HoteldetailsContainer>
				{reviewData && hotelDetailData && (
					<MainContainer
						hotelDetailData={hotelDetailData}
						review={reviewData}
						countPeople={isIncreasePeopleCount}
						countRoom={isIncreaseRoomCount}
						getTotal={getTotal}
						adult={adultCount}
						child={childCount}
						dates={dates}
						calculateDates={calculateDates}
						averageRating={averageRating}
						roomCount={roomCount}
					/>
				)}
				<SideBar>
					<SideBarContainer>
						{hotelDetailData && (
							<SideBarMain
								hotelDetailData={hotelDetailData.hotel_detail}
								goToResult={goToResult}
								basicPrice={basicPrice}
								totalPrice={totalPrice}
							/>
						)}
						<Link to="/">
							<AdImage />
						</Link>
					</SideBarContainer>
				</SideBar>
			</HoteldetailsContainer>
		</section>
	);
}

export default connect(null, { getTotalPrice })(HotelDetails);

const HoteldetailsContainer = styled.div`
	width: 1060px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
`;

const SideBar = styled.aside`
	width: 320px;
`;

const SideBarContainer = styled.div`
	position: sticky;
	top: 80px;
`;

const AdImage = styled.img.attrs({
	src:
		'https://d2ur7st6jjikze.cloudfront.net/cms/55_original_1601030374.jpg?1601030374',
	alt: 'adImage',
})`
	width: 100%;
`;
