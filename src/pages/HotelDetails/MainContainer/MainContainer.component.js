import React from 'react';
import styled from 'styled-components';

import Head from './Head/Head.component';
import ImageVeiwer from './ImageViewer/ImageVeiwer.component';
import Options from './Options/Options.component';
import Infos from './Infos/Infos.component';
import Recommend from './Recommend/Recommend.component';

function MainContainer() {
	return (
		<MainCon>
			<Head />
			<Options></Options>
			<ImageVeiwer></ImageVeiwer>
			<Infos></Infos>
			<Recommend></Recommend>
		</MainCon>
	);
}

export default MainContainer;

const MainCon = styled.div`
	width: 700px;
`;
