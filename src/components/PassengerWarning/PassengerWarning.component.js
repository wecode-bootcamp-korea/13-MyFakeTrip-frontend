import React from 'react';

import { PassengerWarningContainer } from './PassengerWarning.styles';

const PassengerWarning = () => {
	return (
		<PassengerWarningContainer>
			<ul>
				<li>
					유/소아의 나이는 출발일 기준으로 적용되며, 소아는 출발일 기준 만
					2세~13세미만, 유아는 만 2세 미만입니다.(항공사 별 상이)
				</li>
				<li>
					각 항공사 할인석/특가석 예약 시 신분할인 (아동, 경로, 도민, 장애 등)
					<span> 중복할인 불가</span>합니다.
				</li>
				<li>
					신분할인을 선택하여 발권한 항공권은 탑승수속 시 관련 증빙 서류를 제시
					해주셔야 합니다.
				</li>
				<li>
					보호자 없이 탑승하는 만 12세~18세 미만 탑승객은 운송항공사에 따라
					탑승이 제한될 수 있습니다.
				</li>
			</ul>
		</PassengerWarningContainer>
	);
};

export default PassengerWarning;
