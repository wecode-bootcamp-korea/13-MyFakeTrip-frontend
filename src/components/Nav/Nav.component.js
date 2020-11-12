import React from 'react';
import { connect } from 'react-redux';

import { clearToken } from '../../redux/user/user.actions';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import List from "./List.componenet";

function Nav({ clearToken, userToken }) {
	const loginOrLogout = () => {
		clearToken();
	};

	return (
		<NavBar>
			<Header>
				<div>
					<Link to="/">
						<img
							src="https://media.vlpt.us/images/jian/post/a5aa6b15-69a1-4ec2-ac59-db10e1c5eafc/faketrip.png"
							alt="myfaketrip logo"
						/>
					</Link>
					<input type="text" placeholder="여행지나 상품을 검색해보세요" />
				</div>
				<Linkto>
					<Link to="#">파트너 등록하기</Link>
					<Link to="/login" onClick={loginOrLogout}>
						{userToken ? '로그아웃' : '로그인'}
					</Link>
					{userToken ? (
						<Link to="/mypage">마이페이지</Link>
					) : (
						<Link to="/login">회원가입</Link>
					)}
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

const mapStateToProps = ({ user }) => ({
	userToken: user.userToken,
});

export default connect(mapStateToProps, { clearToken })(Nav);
