// func01.js

//! 콜백 함수(고차 함수)

// 자료형: 기본자료형 VS 참조자료형(배열, "함수", 객체)
// >> JS에서 함수는 "자료형"
//    , 변수에 할당 가능 & 함수의 매개변수로 전달 가능(인자로 사용)

//# 1. 콜백 함수(callback)
// : 다른 함수에 인자로 전달되어, 그 함수의 내부에서 실행되는 함수
// A : 더하고 곱하고 나누고 빼주세요.
// B : 해당 수를 음수로 변경해주세요.
// 예약기능..

//# 2. 콜백 함수의 중요성
// - 비동기 처리
//    : 순차적인 코드 흐름을 개발자가 원하는 방식으로 제어 가능
// - 이벤트 리스너 처리
//    : 사용자 행동에 반응하는 이벤트 내부에서 동작 가능

//# 3. 콜백 함수의 응용 사례
// - 서버 요청 처리***
// - 이벤트 처리***
// - 타이머 함수

//& 콜백 함수 예제

// 1) 선언적 함수를 사용한 콜백 함수 구현
console.log('=== 콜백함수: 선언적 함수 ===');

// 0부터 2까지를 "콘솔창에 출력" >> 3번 실행
function callback1(callbackFunc){ // callbackFunc 매개변수 (함수를 데이터로 전달받음)
  for (let i = 0; i < 3; i++){
    // console.log(i); // callbackFunc(print함수)의 인자로 i값을 전달
    callbackFunc(i); 
  } 
}
// cf) let callbackFunc = (index) => {
    // console.log(`${index}번째 함수 호출`);
  //}
// 모듈성: 분리해서 나의 독단적인 기능을 가지는것

// 복잡한 로직(예시)
function print(index) {
  console.log(`${index}번째 함수 호출`);
}

callback1(print); // print함수를 (콜백함수)를 callback1(메인로직)의 인자로 전달

// 2) 익명함수를 사용한 콜백 함수 구현
console.log('=== 콜백함수 : 익명 함수 ===');

// 복잡한 로직 (예시)
const print2 = function(count) {
  console.log(`${count}번째 함수 호출`);
}

callback1(print2); // print2함수(콜백함수)를 callback1(메인로직)의 인자로 전달;

// 3) 화살표 함수를 사용한 콜백 함수 구현
console.log('=== 콜백함수: 화살표 함수 ===');

function callback2(number, callbackFunc, other) { // number 변수(데이터), callbackFunc 함수
  // number의 값이 짝수인 경우 callbackFunc로 데이터 전달

  if(number % 2 === 0) {
    callbackFunc(number);
  } else {
    other(number)
  }
}

const print3 = (even) => {
  console.log(`${even}은 짝수입니다`);
} 

const print4 = (odds) => {
  console.log(`${odds}은 홀수입니다`);
} 

callback2(3, print3, print2); // 메인 로직에 데이터(number)와 콜백함수(print3)를 전달
callback2(4, print3)