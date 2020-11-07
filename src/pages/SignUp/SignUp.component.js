import React from "react";
import "./Signup.styles.scss";

function Signup() {
  return (
    <div className="Signup">
      <div className="container">
        <div className="title">
          <img
            src="https://www.myrealtrip.com/webpack/66066a48489320a05330e36ba701d7e6.png"
            alt="shacking hand"
          />
          <h1>반갑습니다!</h1>
          <p>여행의 모든 것, 마이리얼트립</p>
        </div>
        <button>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxwYXRoIGZpbGw9IiMzODFFMUYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkgNEM1LjY4NiA0IDMgNi4xMjQgMyA4Ljc0M2MwIDEuNzA1IDEuMTM4IDMuMiAyLjg0NiA0LjAzNi0uMTI1LjQ2OC0uNDU0IDEuNjk3LS41MiAxLjk2LS4wODEuMzI2LjEyLjMyMi4yNTEuMjM0LjEwNC0uMDY4IDEuNjQ0LTEuMTE2IDIuMzEtMS41NjguMzYuMDUzLjczMi4wODIgMS4xMTMuMDgyIDMuMzE0IDAgNi0yLjEyNCA2LTQuNzQ0QzE1IDYuMTIzIDEyLjMxNCA0IDkgNCIvPgo8L3N2Zz4KCg=="></img>
          카카오로 계속하기
        </button>
        <div className="social_login">
          <a href="#">
            <img src="https://www.myrealtrip.com/webpack/9585685fa907724c219483be5f7fcfda.svg"></img>{" "}
            페이스북
          </a>
          <a href="#">
            <img src="https://www.myrealtrip.com/webpack/2c3e797d1b2ac9ab2db1fb4bfb9d6b3c.svg"></img>{" "}
            네이버
          </a>
          <a href="#">
            <img src="https://www.myrealtrip.com/webpack/6aac3c05928e0b3db40bbcad0548b3a1.svg"></img>
            이메일
          </a>
        </div>
        <div className="login">
          <span>이미 아이디가 있으신가요?</span>
          <a href="#">로그인</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
