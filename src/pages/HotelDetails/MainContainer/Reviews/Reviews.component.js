import React, { useState } from 'react';
import styled from 'styled-components';
import Review from './Review/Review.component';
import { FaStar, FaRegStar } from 'react-icons/fa';

function Reviews({ review, averageRating }) {
	const [reviewli, setReviewli] = useState(review.review_list);

	return (
		<ReviewsCon>
			<h2>
				후기<span>{reviewli.length}</span>
			</h2>
			<AverageCon>
				<p>{averageRating}</p>
				<StarsWrap>
					<StarFull />
					<StarFull />
					<StarFull />
					<StarFull />
					<StarEmpty />
				</StarsWrap>
				<p className="kor">우수함</p>
			</AverageCon>
			<ReviewsWrap>
				{reviewli.map((review) => {
					return (
						<div key={review.id}>
							<Review review={review} />
						</div>
					);
				})}
			</ReviewsWrap>
		</ReviewsCon>
	);
}

export default Reviews;

const ReviewsCon = styled.div`
	width: 700px;
	margin-top: 64px;

	h2 {
		margin-bottom: 20px;
		color: #343a40;
		font-size: 28px;
		font-weight: 700;

		span {
			margin-left: 8px;
			color: ${({ theme }) => theme.colors.mainBlue};
		}
	}
`;

const AverageCon = styled.div`
	margin-right: 8px;
	padding: 12px 0;
	border-radius: 2px;
	background-color: #f8f9fa;
	text-align: center;

	p {
		color: #343a40;
		font-size: 48px;
		font-weight: 700;
	}

	.kor {
		margin-top: 0;
		color: #495056;
		font-size: 16px;
		font-weight: 700;
		text-align: center;
	}
`;

const ReviewsWrap = styled.div``;

const StarsWrap = styled.div`
	margin: 8px 0;

	i {
		width: 24px;
		height: 24px;
	}
`;

const StarFull = styled(FaStar)``;
const StarEmpty = styled(FaRegStar)``;
