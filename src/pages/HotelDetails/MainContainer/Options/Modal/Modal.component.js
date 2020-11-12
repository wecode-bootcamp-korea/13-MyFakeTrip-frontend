import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

function Modal({ modalVisible, openModal }) {
	return (
		<ModalCon modalVisible={modalVisible}>
			<ModalOverlay />
			<ModalWrap>
				<div className="titleWrap">
					<h3>금액 조회하기가 무엇인가요?</h3>
					<BtnWrap>
						<button onClick={openModal}>
							<CloseIcon />
						</button>
					</BtnWrap>
				</div>
				<ModalContent>
					<p>
						여행 상품의 가격은 같은 상품이라 할지라도 여행 날짜, 그리고 여행자의
						나이와 인원에 따라 달라질 수 있습니다. 마이페이크트립에서는
						여행자님의 편의를 위해 결제를 진행하기 전에 상품의 가격을 조회해볼
						수 있는 기능을 제공합니다. 더 궁금한 점이 있으시다면, 고객센터로
						연락해주세요😎
					</p>
				</ModalContent>
			</ModalWrap>
		</ModalCon>
	);
}

export default Modal;

const ModalCon = styled.div`
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	position: relative;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	display: ${({ modalVisible }) => (modalVisible ? 'block' : 'none')};
	z-index: 10;
`;

const ModalOverlay = styled.div`
	background-color: rgba(0, 0, 0, 0.6);
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

const ModalWrap = styled.div`
	width: 500px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	position: fixed;
	top: 150px;
	left: 35%;
	background-color: white;
	border-radius: 12px;
	text-align: center;
	.titleWrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h3 {
		height: 72px;
		padding: 24px;

		color: #343a40;
		font-size: 20px;
		font-weight: 700;
	}
`;

const ModalContent = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.2);
	p {
		padding: 24px;
		font-size: 15px;
		line-height: 150%;
	}
`;

const BtnWrap = styled.div`
	button {
		margin-right: 16px;
		border: none;
		background-color: white;
		font-size: 14px;
		&:focus {
			outline: none;
		}
	}
`;

const CloseIcon = styled(FaTimes)`
	width: 24px;
	height: 24px;
	color: #8c81bb;
	&:hover {
		color: ${({ theme }) => theme.colors.mainBlue};
	}
`;
