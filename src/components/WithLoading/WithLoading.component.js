import React from 'react';

import SearchLoading from '../SearchLoading/SearchLoading.component';

const WithLoading = (WrappedComponent) => {
	const Loading = ({ loading }) => {
		return loading ? <SearchLoading /> : <WrappedComponent />;
	};
	return Loading;
};

export default WithLoading;
