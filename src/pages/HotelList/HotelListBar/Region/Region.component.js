import React from 'react';
import styled from 'styled-components';

const Region = ({ onRegion, regionData, regionArrData }) => {
	const cityArr = ['서울', '인천', '의왕', '부산', '정현', '예진'];

	const handleRegion = (e) => {
		onRegion(e);
	};

	console.log(regionData);

	return (
		<>
			<Container>
				<RegionDiv>
					<div>지역</div>
					<ul>
						{regionArrData !== undefined &&
							regionArrData.map((item, idx) => (
								<li onClick={handleRegion} data-name={item} key={idx}>
									{item}
								</li>
							))}
					</ul>
				</RegionDiv>
				<CityDiv>
					<div>도시</div>
					<ul>
						{cityArr.map((item, idx) => (
							<li onClick={handleRegion} data-name={item} key={idx}>
								{item}
							</li>
						))}
					</ul>
				</CityDiv>
			</Container>
		</>
	);
};

export default Region;

const Container = styled.div`
	width: 120%;
	position: absolute;
	top: 60px;
	z-index: 50;
	background-color: white;
	padding-bottom: 24px;
	border: 1px solid #ccc;
`;

const RegionDiv = styled.div`
	margin: 24px;
	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 12px;
	}
	div {
		padding-bottom: 12px;
		border-bottom: 1px solid #ccc;
	}
`;

const CityDiv = styled.div`
	margin: 24px;
	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 12px;
	}
	div {
		padding-bottom: 12px;
		border-bottom: 1px solid #ccc;
	}
`;
