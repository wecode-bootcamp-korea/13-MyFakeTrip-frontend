import React from 'react';

import styled from 'styled-components';
import HotelLoading from './HotelLoading/HotelLoading.component';

const WithHotelLoading = ({ loadingState }) => {
	const loadingData = loadingState;
	return loadingData ? <HotelLoading /> : <Wrapped />;
};

export default WithHotelLoading;

const Wrapped = styled.div`
	display: none;
`;
