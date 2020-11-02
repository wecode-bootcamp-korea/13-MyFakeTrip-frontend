import React, { useState } from 'react';

import { GenderButton, PassengerContainer } from './PassengerElement.styles';

const PassengerElement = ({ adult, child }) => {
	const [maleGender, setMaleGender] = useState(true);
	const [femaleGender, setFemaleGender] = useState(false);
	const [surName, setSurName] = useState('');
	const [name, setName] = useState('');
	const [birth, setBirth] = useState('');
	const [nationality, setNationality] = useState('');

	const changeGender = () => {
		setMaleGender(!maleGender);
		setFemaleGender(!femaleGender);
	};

	const putInputChange = (func) => (e) => {
		func(e.target.value);
	};

	const checkPassengerStatus = (adult, child) => {
		return adult ? '성인' : child ? '아동' : '유아';
	};

	return (
		<PassengerContainer>
			<span className="passenger-information-text">
				탑승객: {checkPassengerStatus(adult, child)}
			</span>
			<div className="name">
				<div className="name-input-container">
					<div className="surname">
						<span>한글 성</span>
						<input
							type="text"
							placeholder="예) 홍"
							onChange={putInputChange(setSurName)}
						/>
					</div>
					<div className="name">
						<span>한글 이름</span>
						<input
							type="text"
							placeholder="예) 길동"
							onChange={putInputChange(setName)}
						/>
					</div>
				</div>
				<div className="writing-information">
					<span>
						예약 후 변경이 불가능하오니 신분증과 동일한 성향 기재 부탁드립니다.
					</span>
					<span>※시민권자&외국인: 여권 상의 영문성함 / 내국인: 한글 성함</span>
				</div>
			</div>
			<div className="gender">
				<span>성별</span>
				<div className="button-container">
					<GenderButton onClick={changeGender} gender={maleGender}>
						남성
					</GenderButton>
					<GenderButton onClick={changeGender} gender={femaleGender}>
						여성
					</GenderButton>
				</div>
			</div>
			<div className="nationality">
				<span>국적</span>
				<select onChange={putInputChange(setNationality)}>
					<option value="대한민국">대한민국</option>
					<option value="중국">중국</option>
					<option value="일본">일본</option>
				</select>
			</div>
			<div className="birth">
				<span>생년월일</span>
				<div className="birth-container">
					<input
						type="text"
						placeholder="예) 001010"
						onChange={putInputChange(setBirth)}
					/>
				</div>
			</div>
		</PassengerContainer>
	);
};

export default PassengerElement;
