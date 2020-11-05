import React from 'react';
import styled from 'styled-components';

function People({ isOptionBtn, countPeople, adult, child }) {
	return (
		<PeopleCon isOption={isOptionBtn}>
			<Li>
				<p>성인</p>
				<Wrap>
					<IconWrap onClick={() => countPeople(false, adult, 'adult')}>
						<i className="fas fa-minus"></i>
					</IconWrap>
					<span>{adult}</span>
					<IconWrap onClick={() => countPeople(true, adult, 'adult')}>
						<i className="fas fa-plus"></i>
					</IconWrap>
				</Wrap>
			</Li>
			<Li>
				<p>어린이</p>
				<Wrap>
					<IconWrap
						onClick={() =>
							countPeople(
								false,
								child,

								'child',
							)
						}
					>
						<i className="fas fa-minus"></i>
					</IconWrap>
					<span>{child}</span>
					<IconWrap onClick={() => countPeople(true, child, 'child')}>
						<i className="fas fa-plus"></i>
					</IconWrap>
				</Wrap>
			</Li>
		</PeopleCon>
	);
}

export default People;

const PeopleCon = styled.div`
	background-color: white;
	display: ${({ isOption }) => (isOption ? 'none' : 'inline-block')};
	position: absolute;
	z-index: 1;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.2);
`;

const Li = styled.li`
	width: 428px;
	padding: 16px;
	border: 1px solid #e9ecef;
	color: #343a40;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: 500;

	p {
		margin-bottom: 0;
		display: inline;
		font-size: 14px;
		vertical-align: middle;
	}
`;

const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		border: 1px solid #ced4da;
		border-radius: 50%;
		cursor: pointer;
		&:hover {
			background-color: #e4e1f1;
		}
	}

	span {
		margin: 0 8px;
	}
`;

const IconWrap = styled.div`
	width: 32px;
	height: 32px;
	border: 1px solid black;
	position: relative;

	i {
		position: absolute;
		top: 25%;
		left: 27%;
		color: #3f3480;
	}
`;
