import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HotelListItem from './HotelListItem.component/HotelListItem.component';

const HotelListMainRight = ({
	hotelData,
	filterData,
	pageCheckData,
	hotelNumbers,
	onFilterButton,
	onPagination,
	onPageCheck,
	history,
}) => {
	const handleFilterButton = (num) => {
		onFilterButton(num);
	};

	const handlePageCheck = (num) => {
		onPageCheck(num);
	};

	const handlePagination = (e) => {
		onPagination(e);
		handlePageCheck(e.target.name);
	};

	const pageNumbers = [];

	const hotelPages = Math.ceil(hotelNumbers / 10);

	for (let i = 1; i <= hotelPages; i++) {
		pageNumbers.push(i);
	}

	const [initalPage, setInitalPage] = useState(1);

	const [finalPage, setFinalPage] = useState('');

	useEffect(() => {
		if (hotelPages >= 5) {
			setFinalPage(5);
		} else {
			setFinalPage(hotelPages);
		}
	}, [hotelPages]);

	const handleBeforeButton = () => {
		if (!(initalPage - 5 <= 0)) {
			setInitalPage(initalPage - 5);
			setFinalPage(finalPage - 5 < 5 ? 5 : finalPage - 5);
		}
	};

	const handleAfterButton = () => {
		if (finalPage >= 5 && hotelPages > finalPage) {
			setInitalPage(initalPage + 5);
			setFinalPage(finalPage + 5 > hotelPages ? hotelPages : finalPage + 5);
		}
	};

	const displayPageNumber = pageNumbers
		.slice(initalPage - 1, finalPage)
		.map((page, idx) => (
			<ExtendPageButton
				key={page}
				name={idx}
				onOff={pageCheckData[idx]}
				data-idx={page - 1}
				onClick={handlePagination}
			>
				{page}
			</ExtendPageButton>
		));

	return (
		<Container>
			<FilterBar>
				<div>{`검색된 숙소 ${hotelNumbers ? hotelNumbers : ''}개`}</div>
				<div>
					<FilterButton
						onClick={() => handleFilterButton(0)}
						onOff={filterData[0]}
					>
						추천순
					</FilterButton>
					<FilterButton
						onClick={() => handleFilterButton(1)}
						onOff={filterData[1]}
					>
						가격 낮은순
					</FilterButton>
					<FilterButton
						onClick={() => handleFilterButton(2)}
						onOff={filterData[2]}
					>
						가격 높은순
					</FilterButton>
					<FilterButton
					// onClick={() => handleFilterButton(3)}
					// onOff={filterData[3]}
					>
						평점순
					</FilterButton>
					<FilterButton>거리순</FilterButton>
					<FilterButton
						onClick={() => handleFilterButton(5)}
						onOff={filterData[5]}
					>
						등급순
					</FilterButton>
				</div>
			</FilterBar>
			{hotelData.langth !== 0 &&
				hotelData.map((hotel, idx) => (
					<HotelListItem key={idx} hotelData={hotel} />
				))}
			<ButtonDiv>
				<PageButton
					value={initalPage - 5 <= 0 && 'disabled'}
					onClick={handleBeforeButton}
				>
					＜
				</PageButton>
				{displayPageNumber.map((page) => page)}
				<PageButton
					value={finalPage >= 5 || (hotelPages <= finalPage && 'disabled')}
					onClick={handleAfterButton}
				>
					＞
				</PageButton>
			</ButtonDiv>
		</Container>
	);
};

export default HotelListMainRight;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	flex: 3;
`;

const FilterBar = styled.div`
	width: 95%;
	margin-top: 18px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	div {
		&:first-child {
			font-size: 18px;
			font-weight: 600;
		}
	}
`;

const FilterButton = styled.span`
	color: ${(props) => (props.onOff ? 'black' : '#ccc')};
	font-size: 12px;
	font-weight: 600;
	&::before {
		content: '• ';
		margin-left: 8px;
	}
`;

const ButtonDiv = styled.div`
	display: flex;
	margin: 12px auto;
`;

const PageButton = styled.button`
	border-radius: 50%;
	width: 32px;
	height: 32px;
	margin: 0 4px;
	background-color: white;
	border: 0;
	color: ${(props) => (props.value === 'disabled' ? '#ccc' : 'black')};
	&:hover {
		border: ${(props) =>
			props.value === 'disabled' ? `none` : `2px solid #0984e3`};
	}
`;

const ExtendPageButton = styled(PageButton)`
	color: ${(props) => (props.onOff ? 'white' : 'black')};
	background-color: ${(props) => (props.onOff ? '#0984e3' : 'white')};
`;
