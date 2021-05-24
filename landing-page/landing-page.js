'use strict';

const thumbHome = document.querySelector(".thumb-home");
const thumbKey = document.querySelector(".thumb-key");
const thumbShare = document.querySelector(".thumb-share");
const imgBox = document.querySelector(".imgBox img");
const contentTitle = document.querySelector(".content-title");
const contentSubTitle = document.querySelector(".content-subTitle");
const contentDes = document.querySelector(".content-des");

let src;
let title;
let subTitle;
let des;

const changeObject = (e) => {
  const className = e.target.parentNode.className;
  if (e.target.localName === "li") {
    return
  }
  if (className === "thumb-home") {
    src = "../img/object/bg_main_object_01_01.png";
    title = "BEST DIGITAL CAR KEY";
    subTitle = "대한민국 No.1 디지털 자동차 키";
    des = "도어 열림/잠금 및 트렁크 열림 등 기본 기능 부터 스마트폰으로 가족과 친구에게 차 공유까지 한번에 !";
  }
  if (className === "thumb-key") {
    src = "../img/object/bg_main_object_01_02.png";
    title = "차키 아직도 들고 다니세요?";
    subTitle = "키 없는 카 라이프가 시작됩니다.";
    des = "휴대폰에 설치된 아차키 앱이 내차와 가까워지면 알아서 차문을 열어주기 때문에 주차장에서 차키를 찾거나 주머니에서 키를 꺼낼 필요가 없습니다.";
  }
  if (className === "thumb-share") {
    src = "../img/object/bg_main_object_01_03.png";
    title = "차가 필요하면 아치키로 나눠 타요!";
    subTitle = "가족과 친구에게 차를 공유할 수 있습니다.";
    des = "비대면, 비접촉, 비접점 사용 환경으로 언제 어디서나 원하는 데로 안전하게 차를 공유할 수 있고 내차가 모두의 차가 되는 놀라운 환경을 시작할 수 있습니다.";
  }
  imgBox.src = src;
  contentTitle.innerText = title;
  contentSubTitle.innerText = subTitle;
  contentDes.innerText = des;
}

thumbHome.addEventListener('click', (e) => changeObject(e));
thumbKey.addEventListener('click', (e) => changeObject(e));
thumbShare.addEventListener('click', (e) => changeObject(e));

