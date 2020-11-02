import React from 'react';

import {
	ModalBackground,
	ItineraryModal,
} from './ItineraryModalContainer.styles';

const ItineraryModalContainer = ({
	modalHidden,
	setModalHidden,
	changeLocation,
}) => {
	const itineraryObject = {
		korea: ['인천', '김포', '부산', '제주', '무안', '청주', '대구', '양양'],
		asia: [
			'다낭',
			'방콕',
			'세부',
			'대만/타오위안',
			'코타키나발루',
			'나트랑/칼란',
			'싱가포르',
			'팡라오',
		],
	};

	return (
		<ModalBackground hidden={modalHidden}>
			<ItineraryModal>
				<div className="title">
					<span>도시 선택</span>
					<i
						className="fas fa-times"
						onClick={() => setModalHidden(!modalHidden)}
					/>
				</div>
				<div className="main">
					<div className="korea">
						<div className="big-category">
							<span>국내</span>
						</div>
						<div className="small-category">
							{itineraryObject.korea.map((listElement, idx) => (
								<span key={idx} onClick={changeLocation}>
									{listElement}
								</span>
							))}
						</div>
					</div>
					<div className="asia">
						<div className="big-category">
							<span>아시아</span>
						</div>
						<div className="small-category">
							{itineraryObject.asia.map((listElement, idx) => (
								<span key={idx} onClick={changeLocation}>
									{listElement}
								</span>
							))}
						</div>
					</div>
				</div>
			</ItineraryModal>
		</ModalBackground>
	);
};

export default ItineraryModalContainer;
