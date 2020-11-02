import React from 'react';

import { ReservationWarningContainer } from './ReservationWarning.styles';

const ReservationWarning = () => {
	return (
		<ReservationWarningContainer>
			<ul>
				<li>
					<span>
						탑승객의 영문이름과 생년월일은 여권과 반드시 동일해야 합니다.
						(영문이름은 특수문자 및 공백 제외한 영문만 입력 가능합니다) 예약완료
						후 잘못된 정보 입력 시에는 수정이 불가하며, 출국하실 수 없습니다.
					</span>
				</li>
				<li>
					소아는 출발일 기준 만 2세이상~만12세미만, 유아는 출발일로부터 만2세
					미만입니다.
				</li>
				<li>
					귀국일 기준으로 만12세 이상인 소아와 만2세가 넘는 유아는 추가 차액
					발생하므로 항공예약상담으로 문의 바랍니다.
				</li>
				<li>
					보호자 없이 혼자 여행하는 만12세~18세 미만 청소년의 경우 운송항공사
					규정에 따라 탑승이 제한될 수 있습니다.
				</li>
			</ul>
		</ReservationWarningContainer>
	);
};

export default ReservationWarning;
