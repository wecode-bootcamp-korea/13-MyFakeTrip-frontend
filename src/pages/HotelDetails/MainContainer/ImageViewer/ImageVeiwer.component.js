import React, { useState } from 'react';
import styled from 'styled-components';

function ImageVeiwer({ hotelDetailData }) {
	const [images] = useState(hotelDetailData.hotel_images);
	console.log(images);
	return (
		<ImageVeiwerCon>
			<UpperImageWrap>
				<Image upperOneImage>
					<img alt="hotel" src={images[0]} />
				</Image>
			</UpperImageWrap>
			<LowerImageWrap>
				{images.map((_, idx) => {
					if (idx >= 1)
						return (
							<Image key={idx}>
								<img alt="hotel" src={images[idx]} />
							</Image>
						);
					return null;
				})}
			</LowerImageWrap>
		</ImageVeiwerCon>
	);
}

export default ImageVeiwer;

const ImageVeiwerCon = styled.section`
	width: 700px;
	height: 645px;
	margin: 32px 0;
`;

const UpperImageWrap = styled.div`
	margin-bottom: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

const LowerImageWrap = styled.div`
	display: flex;
	flex-basis: 33.3%;
	justify-content: space-between;
`;

const Image = styled.div`
	width: ${({ upperOneImage }) => (upperOneImage ? '100%' : '230px')};
	height: ${({ upperOneImage }) => (upperOneImage ? '467px;' : '172.5px')};
	background-size: ${({ upperOneImage }) =>
		upperOneImage ? '100% 467px' : '230px 172.5px'};
	transition: 0.2s ease-out;
	cursor: pointer;
	&:hover img {
		filter: brightness(80%);
	}

	img {
		width: 100%;
		height: 100%;
		transition: 0.3s;
		background-color: black;
	}
`;
