import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FiShare2 } from 'react-icons/fi';
import styled, { css } from 'styled-components';

function SideBarMain({ totalPrice, basicPrice, goToResult, hotelDetailData }) {
	const [isWish, setIsWish] = useState(false);

	const handleWish = () => {
		setIsWish(!isWish);
	};

	return (
		<SideMain>
			<Wrap upper>
				<SideHead>
					<Wrap>
						<Text price>
							{totalPrice === '0'
								? new Intl.NumberFormat().format(basicPrice)
								: totalPrice}
							원
						</Text>
						<Text>1박</Text>
					</Wrap>
					<WrapButton>
						<ShareIcon />
					</WrapButton>
				</SideHead>
				<Wrap>
					<Button booking onClick={goToResult}>
						예약하기
					</Button>
				</Wrap>
				<Wrap>
					<Button onClick={handleWish}>
						<WishFullHeart haswish={isWish ? 1 : 0} />
						<WishHeart haswish={isWish ? 1 : 0} />
						{isWish ? '위시리스트에 담기' : '위시리스트에 추가됨'}
					</Button>
				</Wrap>
				<Wrap>
					<WishCount>304명이 이 상품을 위시리스트에 담았습니다.</WishCount>
				</Wrap>
			</Wrap>
			<Wrap hotelName>
				<NameWrap>
					<img
						src="data:image/jpeg;base64,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"
						alt="resort"
					/>
					<span>{hotelDetailData.name}</span>
				</NameWrap>
				<QuestionButton>
					<MailIcon />
					<span>문의하기</span>
				</QuestionButton>
			</Wrap>
		</SideMain>
	);
}

export default SideBarMain;

const SideMain = styled.div`
	margin-top: 100px;
	margin-bottom: 16px;
	border-radius: 2px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 0 0 1px #e9ecef;
`;

const SideHead = styled.header`
	margin-bottom: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Text = styled.span`
	margin-right: 8px;
	color: ${({ price }) => (price ? '#343a40' : '#848c94')};
	font-size: ${({ price }) => (price ? '24px' : '14px')};
	font-weight: ${({ price }) => (price ? '700' : '400')};
`;

const Wrap = styled.div`
	padding: ${({ upper, hotelName }) => {
		if (upper) {
			return '24px 24px 8px';
		} else if (hotelName) {
			return '24px 16px';
		} else {
			return '0';
		}
	}};

	padding: ${({ upper, hotelName }) =>
		upper ? '24px 24px 8px' : hotelName ? '24px 16px' : '0'};
	border-top: ${({ hotelName }) => (hotelName ? '1px solid #dee2e6' : 'none')};
	display: ${({ hotelName, mail }) => (hotelName || mail ? 'flex' : 'block')};
	justify-content: ${({ hotelName, mail }) =>
		hotelName || mail ? 'space-between' : 'center'};
	align-items: center;
`;

const WrapButton = styled.button.attrs({
	type: 'button',
})`
	border: none;
	background-color: white;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

const NameWrap = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
	cursor: pointer;

	img {
		width: 32px;
		height: 32px;
		margin-right: 10px;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: 0 0 0 1px rgba(33, 37, 41, 0.15);
	}
`;

const QuestionButton = styled.button`
	border: none;
	background-color: white;
	display: flex;
	align-items: center;
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background-color: rgba(63, 52, 128, 0.1);
	}
	&:focus {
		outline: none;
	}

	span {
		color: ${({ theme }) => theme.colors.mainBlue};
	}
`;

const Button = styled.button.attrs({
	type: 'button',
})`
	height: ${({ booking }) => (booking ? '48px' : '40px')};
	border: ${({ booking }) =>
		booking
			? `1px solid ${({ theme }) => theme.colors.mainBlue}`
			: '1px solid #ced4da'};
	color: ${({ booking }) => (booking ? '#fff' : '#495056')};
	background-color: ${({ booking }) => (booking ? '#3F3480' : 'white')};
	font-size: ${({ booking }) => (booking ? '16px' : '14px')};
	line-height: ${({ booking }) => (booking ? '24px' : '21px')};
	width: 272px;
	margin-bottom: 8px;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0.85;
	vertical-align: middle;
	text-align: center;
	font-weight: 700;
	cursor: pointer;
	transition: box-shadow 0.1s ease-out, background-color 0.1s ease-out,
		color 0.1s ease-out, border-bottom 0.1s ease-out;
	&:hover {
		opacity: 1;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
	}
	&:focus {
		outline: none;
	}
`;

const ShareIcon = styled(FiShare2)`
	width: 20px;
	height: 20px;
`;

const HeartStyle = css`
	width: 20px;
	height: 20px;
	margin-right: 4px;
`;

const WishFullHeart = styled(FaHeart)`
	${HeartStyle}
	color: red;
	display: ${({ haswish }) => (haswish ? 'inline' : 'none')};
`;

const WishHeart = styled(FaRegHeart)`
	${HeartStyle}
	color: #ced4da;
	display: ${({ haswish }) => (haswish ? 'none' : 'inline')};
`;

const MailIcon = styled(FiMail)`
	width: 20px;
	height: 20px;
	margin-right: 2px;
	color: ${({ theme }) => theme.colors.mainBlue};
`;

const WishCount = styled.p`
	margin: 16px 0;
	color: #848c94;
	font-size: 13px;
	text-align: center;
`;
