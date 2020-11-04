import React from "react";
import "./Main.styles.scss";

function Main() {
  return (
    <div className="Main">
      <div className="title">
        <h1>부담 없이 예약하세요</h1>
        <p>
          나중에 변경 및 취소가 가능한 예약 옵션으로 여러분의 여행을 미리
          계획하세요. 다시 여행을 떠날 때가 오면 더 확실하게 계획을 짤 수
          있을거에요.
        </p>
      </div>
      <div className="desc">
        <div className="detail">
          <img
            src="https://js.skyscnr.com/sttc/oc-registry/components/flexible-travel/0.0.18/build//static/media/Flex_Flights.94daa26e.svg"
            alt="항공권 예약 이미지"
          />
          <h2>항공권</h2>
          <p>
            많은 항공사에서는 추후 항공권 변경 및 취소에도 손해가 없는 새로운
            정책을 도입했습니다.
          </p>
          <a href="#">변경 가능한 티켓 찾아보기</a>
        </div>
        <div className="detail">
          <img
            src="https://js.skyscnr.com/sttc/oc-registry/components/flexible-travel/0.0.18/build//static/media/Flex_Hotels.8105ae2d.svg"
            alt="호텔 예약 이미지"
          />
          <h2>호텔</h2>
          <p>
            숙박 계획을 여유롭게 잡으세요. 지금 예약하더라도, 나중에 확실해지면
            그때 가서 확정할 수 있습니다.
          </p>
          <a href="#">무료 취소 가능한 찾아보기</a>
        </div>
        <div className="detail">
          <img
            src="https://js.skyscnr.com/sttc/oc-registry/components/flexible-travel/0.0.18/build//static/media/Flex_Cars.43fb1933.svg"
            alt="렌트카 예약 이미지"
          />
          <h2>렌터카</h2>
          <p>
            여유 있게 여행을 계획하세요. 대부분 업체에서 48시간 이내까지 무료
            취소, 또는 저렴한 금액으로 취소가 가능합니다.
          </p>
          <a href="#">예약 취소가 자유로운 렌터카 찾기 찾아보기</a>
        </div>
      </div>
    </div>
  );
}

export default Main;
