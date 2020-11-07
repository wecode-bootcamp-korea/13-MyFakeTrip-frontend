import React from "react";
import { Link } from "react-router-dom";
import "./Nav.styles.scss";
import {
  SearchOutlined,
  RightCircleFilled,
  QuestionCircleOutlined,
} from "@ant-design/icons";

function Nav() {
  return (
    <div className="Nav">
      <nav className="nav_bar">
        <div className="left">
          <Link to="/">
            <img src="data/myrealtrip_logo.png" alt="myrealtrip_logo" />
          </Link>
          <div className="search">
            <SearchOutlined className="icon" />
            <input type="text" placeholder="여행지나 상품을 검색해 보세요" />
          </div>
        </div>
        <ul>
          <li>
            <a href="#">파트너 등록하기</a>
          </li>
          <li>
            <a href="#">로그인</a>
          </li>
          <li>
            <a href="#">회원가입</a>
          </li>
        </ul>
      </nav>

      <div className="nav_list">
        <ul>
          <li>
            <a href="#">홈</a>
          </li>
          <li>
            <a href="#">항공권</a>
          </li>
          <li>
            <a href="#">호텔</a>
          </li>
          <li>
            <a href="#">펜션&캠핑</a>
            <div className="n_circle">N</div>
          </li>
          <li>
            <a href="#">투어&티켓</a>
          </li>
          <li>
            <a href="#">랜선투어</a>
          </li>
          <li>
            <a href="#">국내골프</a>
          </li>
          <li>
            <a href="#">할인혜택</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
