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

      <div className="container">
        <div className="flight">
          <div className="stopover">
            <ul>
              <li>
                <a href="#">왕복</a>
              </li>
              <li>
                <a href="#">편도</a>
              </li>
              <li>
                <a href="#">다구간</a>
              </li>
            </ul>
          </div>
          <div className="booking">
            <ul>
              <li>
                <a href="#">항공권 예약내역</a>
                <RightCircleFilled className="icon" />
              </li>
              <li>
                <a href="#">비회원 예약내역</a>
                <RightCircleFilled className="icon" />
              </li>
            </ul>
          </div>
        </div>
        <form>
          <input className="first"></input>
          <input className="second"></input>
          <input className="third"></input>
          <input className="button" type="submit" value="검색"></input>
        </form>
        <div className="checkbox">
          <label>
            <input type="checkbox" />
            직항만
          </label>
          <label>
            <input type="checkbox" />
            무료 수하물 가능
          </label>
          <span className="diff_route">출발/도착 다른 구간 </span>
          <QuestionCircleOutlined />
        </div>
      </div>
    </div>
  );
}

export default Nav;
