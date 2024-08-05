// func01.js (function 키워드 축약형)

//! 자바스크립트 함수

// 1. 함수의 정의
// : 특정 작업을 수행하거나 값을 계산하는 데 사용되는 코드의 묶음(집합)

//# 2. 함수의 사용 용도 / 예제

//? 1) 코드 재사용

// EX) 두 수의 합을 계산하는 자바스크립트 함수
//    : f(x) = y
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2); // 3
console.log(result);

console.log(sum(1414,1233)); // 2647

// 2) 모듈화 & 추상화
// : 복잡한 작업을 수행하는 코드를 함수로 분리
// >> 각 함수가 수행한는 작업에 집증

// 모듈성
// : 로직(코드 흐름) 단위로 작업을 나누어 관리할 수 있는 특성

//? 3) 이벤트처리
// : 웹 페이지에서 발생하는 다양한 이벤트를 처리하는데 사용

// let button = document.querySelector('button');

// 웹 문서의 요소들과 묶이는 기능 동작을 함수로 정의
// function message(){
//   console.log('버튼이 클릭되었습니다.');
// }

// 웹 문서의 내용인 button 클릭 시 동작을 설계
// button.addEventListener('click', message);

//# 3. 함수 구현 방법 (함수 생성)
// : function 키워드를 사용

/*
function 함수명(매개변수, parameter) {
  - 함수가 수행할 코드

  return 결과값;
}
*/

//? 함수명
// : 변수 명명 규칙과 유사
// : 동사 사용을 권장!

//? 매개변수 (parameter, 파라미터)
// : 함수에 입력으로 제공되는 값(데이터)
// : 대부분 해당 값을 통해 특정 작업을 수행

//? 결과값 (return, 리턴값)
// : 함수가 작업을 완료한 후 반환하는 값
// : return 키워드를 사용하여 결과값을 반환

// >> 함수명, 매개변수, 결과값은 선택 가능

//# 4. 함수 선언 방식 (3가지) 

// & 1) 함수 선언식
// : function 키워드 사용, 함수의 이름이 필수적으로 명시
// >> 호이스팅이 적용
//    : 함수를 선언하기 전에 호출할 수 있음

greet();
console.log('== 함수 선언 이전 ==');

// 함수 선언(정의)
// >> 매개변수, 반환값이 없는 함수
function greet(){ // greet: 인사하다
  console.log('안녕하세요 :');
}

// 함수 호출(사용)
greet();

// & 2) 함수 표현식
// : 함수를 변수에 할당하는 방식으로 정의
// : 함수명 사용이 선택적
// : 호이스팅 적용 x >> 선언(정의) 이전에 호출 불가

/*
변수 지정 키워드는 let, const 모두 사용 가능

const 변수명 == function(매개변수) {
 - 함수 기능 작성
 return 반환값;
}
*/

// >> 이름이 없는 함수: "익명 함수"
// : 함수명을 지정하지 않는 함수

// greet2(); - Error 접근오류 (호이스팅X)
console.log('== 함수 표현식 선언 이전 ==');

const greet2 = function() {
  console.log('안녕하세요 :) 함수표현식입니다.');
}

// 함수 호출(사용) 방법은 동일
greet2();

// & 3) 화살표 함수
// : 기존의 function 키워드를 화살표로 대체하여 간결한 함수를 작성
// : 항상 익명 함수로 사용
// : 'this'가 일반 함수와 다르게 바인딩 됨

/*
const 변수명 = (매개변수) => {
  - 함수 기능 작성
  return 반환값;
  }
*/

// greet3(); - Error; (호이스팅 불가)
console.log('== 화살표 함수 선언 이전 ==');

const greet3 = () => {
  console.log('안녕하세요 :) 화살표함수입니다.');
}

greet3();

//? 화살표 함수는 함수 본문(기능 구현부)이 단일문인 경우 중괄호와 return 키워드 생략이 가능
const greet4 = name => console.log(`안녕하세요. ${name}님 :)`);

//? 인자값(아규먼트, argument)
// : 실제 계산을 위해(함수 사용을 위해)파라미터로 전달되는 값
// 파라미터가 변수의 선언
// 인자값 변수의 할당

// 파라미터와 인자는 생략 가능
greet4('이승아');

// # 5. 함수 호출 방법
// 함수를 생성 - 함수를 선언한다.
// 함수를 사용 - 함수를 호출한다.

// 함수명(인자값);

// # 6. 함수의 스코프(범위, scope)

// 지역변수(local)
// : 중괄호 내의 영역 (함수 내부)

// 전역변수(global)
// : 해당 파일(모듈) 내부에서 어디서든지 접근 가능
let username = '이승아';

function lsa() {
  // 지역 변수
  // : 함수 내의 변수
  // : 해당 함수 (중괄호) 범위 내에서만 사용이 가능
  let job = 'Developer';
  console.log(`${username}'s job is ${job}`);
}

lsa(); // 이승아's job is Developer
console.log(username); // 이승아
// console.log(job); - Error; (지역 변수는 해당 스코프를 벗어나면 사용 불가!!)

//* 함수 선언 방식에 따른 베스트 프렉티스 //

// - 일반적 상황에서는 함수 선언문 방식 사용
// - 조건문 함수 사용시 함수 표현식을 사용
// - 콜백 함수 사용 시 화살표 함수 사용
