import React from 'react';

import { AdditionalInformationContainer } from './AdditionalInformation.styles';

const AdditionalInformation = () => {
	return (
		<AdditionalInformationContainer>
			<ul>
				<li>
					예약자 정보는 항공사 스케쥴 변동,결항 등의 상황 발생 시 안내 사유로
					기재되오니 즉시 연락이 가능한 연락처 기재 부탁드립니다.
				</li>
			</ul>
		</AdditionalInformationContainer>
	);
};

export default AdditionalInformation;
