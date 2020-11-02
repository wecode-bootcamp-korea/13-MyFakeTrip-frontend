import React from 'react';

import './SortedInformation.styles.scss';

const SortedInformation = () => {
	return (
		<div className="SortedInformation">
			<div className="information-container">
				<span className="tag">가는편</span>
				<div className="departure-and-arrival">
					<span>김포</span>
					<i className="fas fa-long-arrow-alt-right" />
					<span>대구</span>
				</div>
				<span>11월03일(화)</span>
			</div>
		</div>
	);
};

export default SortedInformation;
