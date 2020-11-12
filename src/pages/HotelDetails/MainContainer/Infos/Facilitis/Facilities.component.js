import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Facilities({ hotelDetailData }) {
	const [openFacilityBtn, setOpenFacilityBtn] = useState(false);
	const [conveniences, setConveniences] = useState(
		hotelDetailData.hotel_conveniences,
	);

	const openFoldBtn = () => {
		setOpenFacilityBtn(!openFacilityBtn);
	};

	return (
		<div className="Facilities">
			<div>
				<List hide={openFacilityBtn}>
					{conveniences.map((convenience) => {
						return (
							<Li key={convenience.id}>
								<img src={convenience.icon_url} alt="convenience" />
								{convenience.name}
							</Li>
						);
					})}
				</List>
			</div>
			<Button onClick={openFoldBtn}>
				{openFacilityBtn ? '모두 보기' : '접기'}
			</Button>
		</div>
	);
}

export default Facilities;

const List = styled.ul`
	width: 540px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	height: ${({ hide }) => (hide ? '100%' : '54px')};
	overflow: hidden;
`;

const Li = styled.li`
	margin-bottom: 24px;
	color: #495056;
	display: flex;
	flex-direction: column;
	flex-basis: 16.66%;
	font-size: 13px;
	text-align: center;

	img {
		width: 28px;
		height: 28px;
		margin: 0 auto 6px;
	}
`;

const Button = styled.button.attrs({
	type: 'button',
})`
	margin-top: 8px;
	border: none;
	color: ${({ theme }) => theme.colors.mainBlue};
	background-color: rgba(0, 0, 0, 0);
	font-size: 14px;
	font-weight: 700;
	line-height: 21px;
	cursor: pointer;
	&:focus {
		outline: none;
	}
`;
