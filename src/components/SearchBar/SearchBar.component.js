import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { IoIosArrowDropright } from "react-icons/io";
import { GrCircleQuestion } from "react-icons/gr";
import Modal from "./Modal.component";
import styled from "styled-components";

function SearchBar() {
  let [modal, setModal] = useState(false);
  return (
    <Wrapper>
      <Header>
        <List>
          <a href="#">왕복</a>
          <a href="#">편도</a>
          <a href="#">다구간</a>
        </List>
        <Booking>
          <a href="#">
            항공권 예약내역
            <IoIosArrowDropright />
          </a>
          <a href="#">
            비회원 예약내역
            <IoIosArrowDropright />
          </a>
        </Booking>
      </Header>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px 40px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const List = styled.ul`
  display: flex;
  color: #ffffff;
`;
const Booking = styled.div`
  padding: 10px;
`;

export default SearchBar;
