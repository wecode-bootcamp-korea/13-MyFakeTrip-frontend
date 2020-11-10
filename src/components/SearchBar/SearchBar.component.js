import React from "react";
import { Link } from "react-router-dom";
import "./Search.styles.scss";
import { RightCircleFilled, QuestionCircleOutlined } from "@ant-design/icons";
function SearchBar() {
  return (
    <div className="Search">
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
  );
}
export default SearchBar;
