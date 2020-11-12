import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Review({ review }) {
	const [createdDate, setCreatedDate] = useState(review.created_at);
	const [updatedDate, setUpdatedDate] = useState('');
	const [rating, setRating] = useState(review.rating);
	const [averageRating, setAverageRating] = useState(0);

	const changeDate = () => {
		const createdSplit = createdDate.split('T')[0];
		setCreatedDate(createdSplit);
	};

	// const averageRatings = () => {
	// 	const sumRating = rating + rating;
	// 	setAverageRating(sumRating / props.review.length);
	// };

	useEffect(() => {
		changeDate();
	}, [createdDate, updatedDate]);

	return (
		<ReviewCon>
			<header>
				<RateBox>{review.rating}</RateBox>
				<h3>{review.title}</h3>
			</header>
			<ContentWrap>
				<p>{review.content}</p>
			</ContentWrap>
			<ReviewerInfoWrap>`{createdDate} · Ma`</ReviewerInfoWrap>
		</ReviewCon>
	);
}

export default Review;

const ReviewCon = styled.div`
	margin: 24px 0;
	padding: 12px 0;
	border-bottom: 1px solid #bec2c7;

	header {
		margin-bottom: 10px;
		display: flex;

		h3 {
			font-size: 18px;
			font-weight: 600;
			color: #343a40;
			line-height: 32px;
			margin-bottom: 0;
		}
	}
`;

const RateBox = styled.div`
	width: 32px;
	height: 32px;
	margin-right: 10px;
	border-radius: 6px 6px 6px 0;
	color: #fff;
	background-color: ${({ theme }) => theme.colors.mainBlue};
	font-size: 16px;
	font-weight: 600;
	text-align: center;
	line-height: 32px;
`;

const ContentWrap = styled.div`
	padding-left: 42px;
	p {
		font-size: 15px;
		line-height: 25px;
	}
`;

const ReviewerInfoWrap = styled.footer`
	margin: 12px 0;
	padding-left: 42px;
	font-size: 12px;
	color: #848c94;
`;
