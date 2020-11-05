import React from 'react';
import styled from 'styled-components';

const cityArr = ['서울', '인천', '부산', '대구', '광주'];

const Region = ({ onRegion, onOffData, cityArrData, regionArrData }) => {
	const handleRegion = (e) => {
		onRegion(e);
	};

	return (
		<>
			<Container onOff={onOffData.onOff}>
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
						{cityArr !== undefined &&
							cityArr.map((item, idx) => (
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
	display: ${(props) => (props.onOff ? 'block' : 'none')};
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
