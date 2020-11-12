import React from 'react';
import styled from 'styled-components';
import Head from './Head/Head.component';
import ImageVeiwer from './ImageViewer/ImageVeiwer.component';
import Options from './Options/Options.component';
import Infos from './Infos/Infos.component';
import Recommend from './Recommend/Recommend.component';
import Reviews from './Reviews/Reviews.component';

function MainContainer(props) {
	return (
		<MainCon>
			<Head
				hotelDetailData={props.hotelDetailData}
				averageRating={props.averageRating}
			/>
			<Options
				hotelDetailData={props.hotelDetailData}
				countPeople={props.countPeople}
				countRoom={props.countRoom}
				getTotal={props.getTotal}
				adult={props.adult}
				child={props.child}
				dates={props.dates}
				calculateDates={props.calculateDates}
				roomCount={props.roomCount}
			/>
			<ImageVeiwer hotelDetailData={props.hotelDetailData} />
			<Recommend />
			<Infos hotelDetailData={props.hotelDetailData} />
			<Reviews review={props.review} averageRating={props.averageRating} />
		</MainCon>
	);
}

export default MainContainer;

const MainCon = styled.div`
	width: 700px;
`;
