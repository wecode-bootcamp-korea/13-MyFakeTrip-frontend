import React, { useState, useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
// import List from "./List.componenet";

function Nav() {
	const [isLogin, setIsLogin] = useState(false);
	const [isFocus, setIsFocus] = useState(false);
	const history = useHistory();
	const [inputValue, setInputValue] = useState('');
	const [isClick, setIsClick] = useState(false);
	const [isSearchActive, setIsSearchActive] = useState(true);
	const [isHotel, setIsHotel] = useState(false);
	// console.log(history.location.pathname, "sdfklsdlfjlksdfklsjf");

	useEffect(() => {
		// console.log(history.location.pathname);
		if (history.location.pathname !== '/') {
			setIsSearchActive(false);
		}
	}, [history.location.pathname]);

	return (
		<NavBar>
			<Header>
				<div>
					<img src="./data/faketrip.png" alt="myfaketrip logo" />
					<input type="text" placeholder="여행지나 상품을 검색해보세요" />
				</div>
				<Linkto>
					<Link to="#">파트너 등록하기</Link>
					<Link to="/login">로그인</Link>
					<Link to="/signup">회원가입</Link>
				</Linkto>
			</Header>
		</NavBar>
	);
}
const NavBar = styled.div`
	height: 120px;
	padding: 20px 110px;
	border-bottom: 1px solid #dee2e6;
`;
const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 15px;
	img {
		width: 150px;
		margin-right: 30px;
	}
	input {
		width: 340px;
		height: 45px;
		border-radius: 4px;
		border: none;
		padding-left: 20px;
		color: #495056;
		background-color: #f5f6f7;
		:focus {
			outline: none;
		}
	}
`;
const Linkto = styled.div`
	margin-top: 15px;
	a {
		color: rgba(73, 80, 86, 0.7);
		font-size: 15px;
		padding: 7px 25px;
		&:last-child {
			border: 2px solid #a7d4f9;
			border-radius: 3px;
			color: #2b96ed;
		}
	}
`;
export default Nav;
