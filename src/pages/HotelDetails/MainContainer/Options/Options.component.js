import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { BsQuestionCircle, BsPeopleFill } from 'react-icons/bs';
// import { FaCalendar } from 'react-icons/fa';
import { IoIosSwitch } from 'react-icons/io';
import Rooms from './Rooms/Rooms.component';
import People from './People/People.component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Modal from './Modal/Modal.component';

function Options(props) {
	const [isRoomOptionBtn, setIsRoomOptionBtn] = useState(true);
	const [isPeopleOptionBtn, setIsPeopleOptionBtn] = useState(true);
	const [modalVisible, setModalVisible] = useState(false);

	const handleOption = (isOption, setIsOption) => {
		setIsOption(!isOption);
	};

	const changeDateResultToKR = (e) => {
		props.calculateDates(e.target.value);
		const start = e.target.value.split(' - ')[0];
		const end = e.target.value.split(' - ')[1];
		const startSplit = start.split('/');
		const endSplit = end.split('/');
		const dateText = ['월 ', '일 ', '년'];
		let startResult = [];
		let endResult = [];
		for (let i = 0; i < 3; i++) {
			startResult.push(startSplit[i] + dateText[i]);
			endResult.push(endSplit[i] + dateText[i]);
		}
		startResult = startResult.join('');
		endResult = endResult.join('');
		const dateResult = startResult + ' - ' + endResult;
		e.target.value = dateResult;
	};

	// const blurPeopleOption = () => {
	// 	setIsPeopleOptionBtn(true);
	// };

	// const blurRoomOption = () => {
	// 	setIsRoomOptionBtn(true);
	// };

	const openModal = () => {
		setModalVisible(!modalVisible);
	};

	return (
		<OptionsCon>
			<div className="title-wrap">
				<h2>옵션 선택</h2>
				<button className="question" onClick={openModal}>
					<span>금액 조회하기가 무엇인가요?</span>
					<QuestionIcon />
				</button>
			</div>
			<div>
				<Modal modalVisible={modalVisible} openModal={openModal} />
			</div>
			<div className="selector-wrap">
				<SelectWrap date>
					<DateRangePicker onApply={changeDateResultToKR}>
						<input
							type="text"
							className="form-control"
							placeholder="날짜를 선택해주세요."
						/>
					</DateRangePicker>
				</SelectWrap>
				<SelectWrap roomOption>
					<RoomBtn
						onClick={() => {
							handleOption(isRoomOptionBtn, setIsRoomOptionBtn);
						}}
					>
						<SwitchIcon />
						옵션을 선택해주세요
					</RoomBtn>
					<div>
						<Rooms
							isOptionBtn={isRoomOptionBtn}
							countRoom={props.countRoom}
							roomCount={props.roomCount}
						/>
					</div>
				</SelectWrap>
				<SelectWrap peopleOption>
					<PeopleBtn
						onClick={() => {
							handleOption(isPeopleOptionBtn, setIsPeopleOptionBtn);
						}}
					>
						<PeopleIcon />
						인원
					</PeopleBtn>
					<div>
						<People
							isOptionBtn={isPeopleOptionBtn}
							countPeople={props.countPeople}
							adult={props.adult}
							child={props.child}
						/>
					</div>
				</SelectWrap>
				<button className="calculator" onClick={props.getTotal}>
					금액 조회하기
				</button>
			</div>
		</OptionsCon>
	);
}

export default Options;

const OptionBtnStyle = css`
	height: 48px;
	margin-right: 4px;
	border: none;
	border-radius: 4px;
	color: #343a40;
	background-color: #f5f6f7;
	display: flex;
	flex: 1;
	align-items: center;
	font-size: 16px;
	font-weight: 500;
	text-align: left;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	transition: all 0.1s ease-out;
	&:hover {
		box-shadow: 0 0 0 1px #848c94;
	}
	&:focus {
		outline: none;
	}
`;

const IconStyle = css`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;

const SwitchIcon = styled(IoIosSwitch)`
	${IconStyle}
`;

const PeopleIcon = styled(BsPeopleFill)`
	${IconStyle}
`;

const OptionsCon = styled.section`
	.title-wrap {
		display: flex;
		justify-content: space-between;

		h2 {
			margin-bottom: 16px;
			color: #343a40;
			font-size: 22px;
			font-weight: 700;
			line-height: 16px;
		}

		button {
			border: none;
			background-color: white;
			&:focus {
				outline: none;
			}

			span {
				margin-right: 4px;
				color: rgb(81, 171, 243);
				font-size: 12px;
				font-weight: 700;
				text-align: right;
				cursor: pointer;
				transition: color 75ms ease-out;
				&:hover {
					color: rgb(52, 106, 150);
				}
			}
		}
	}

	.selector-wrap {
		display: flex;
	}

	.calculator {
		${OptionBtnStyle}
		border: 1px solid ${({ theme }) => theme.colors.mainBlue};
		color: #fff;
		background-color: ${({ theme }) => theme.colors.mainBlue};
		display: inline;
		font-weight: 700;
		text-align: center;
	}
`;

const QuestionIcon = styled(BsQuestionCircle)`
	width: 12px;
	height: 12px;
	color: rgb(81, 171, 243);
	cursor: pointer;
	transition: color 75ms ease-out;
	&:hover {
		color: rgb(52, 106, 150);
	}
`;

const SelectWrap = styled.div`
	.form-control {
		width: 220px;
		cursor: pointer;
	}

	.form-control,
	.people {
		${OptionBtnStyle}
	}

	.roomOption,
	.peopleOpion {
		position: relative;
	}
`;

const RoomBtn = styled.button.attrs({
	type: 'button',
})`
	${OptionBtnStyle}
`;

const PeopleBtn = styled.button`
	${OptionBtnStyle}
`;
