import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainContainer from './MainContainer/MainContainer.component';
import SideBarMain from './SideBarMain/SideBarMain.component';
// import '/data/hoteldetaildata';

function HotelDetails() {
	return (
		<section className="HotelDetails">
			<HoteldetailsContainer>
				<MainContainer />
				<SideBar>
					<SideBarContainer>
						<SideBarMain />
						<AdLink to="/">
							<AdImage />
						</AdLink>
					</SideBarContainer>
				</SideBar>
			</HoteldetailsContainer>
		</section>
	);
}

export default HotelDetails;

const HoteldetailsContainer = styled.div`
	width: 1060px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const SideBar = styled.aside`
	width: 320px;
	height: 100vw;
`;

const SideBarContainer = styled.div`
	position: sticky;
	top: 80px;
`;

const AdLink = styled(Link)``;

const AdImage = styled.img.attrs({
	src:
		'https://d2ur7st6jjikze.cloudfront.net/cms/55_original_1601030374.jpg?1601030374',
	alt: 'adImage',
})`
	width: 100%;
`;
