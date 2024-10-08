// g_loop02.js

//! 자바스크립트 반복문

// # 2. while문
// : 주어진 조건이 "참인 동안" 코드 블록을 "계속 실행"
// >> for문의 초기식, 표현식, 증감식 분리한 형태

//cf. for문 (~동안에): 정해진 횟수만큼 반복
// >> 초기식(변수 초기화); 표현식(조건); 증감식

//? for문의 기본 구조(형태)
/*
for (초기식; 표현식; 증감식){
  ==반복할 코드 블록==
}
*/


// & while문의 기본구조(형태)
/*
while(조건식){
  == 반복할 코드 블록 ==

  >> 표현식의 결과가 조건식의 false(거짓)에 도달할 수 있도록 표현식을 변경하는 실행문을 반드시! 포함

  >> 표현식을 변경하는 실행문이 없을 경우 >> 무한반복("무한 루프")
}
*/

console.log('== while 반복문 ==');

// a를 출력, a는 0부터 4까지 1씩 증가하는 수
console.log('== for 반복문 예제 ==');
for(let a = 0; a < 5; a++){
  console.log(a);
}

console.log('== while 반복문 ==');
let b = 0; // 초기화식의 분리

while (b < 5) { // 조건식

  // 표현식을 조건시에 도달할 기준이 없음: 무한 루프
  console.log(b);

  // 증감식: 코드블록 내에 존재
  // >> while문은 조건에 도달하지 않으면 코드블록의 완전한 반복 후 다시 조건을 검토
  b++;
  // b += 1; // b = b + 1
}

// # 3. do-while문
// : while 반복문과 유사, 조건을 확인하기 전에 "먼저 코드 블록을 실행"
// >> 최소한 한 번의 코드 블록 실행을 보장

//&  do-while문의 기본 구조(형태)
/*
do {
  반복할 실행 블록
} while (조건식);
*/

console.log('== do-while ==');

let c = 0;
do{
  // 실행 블록 내에 초기화식 작성의 경우
  // : 반복할 때마다 초기화되어 무한 루프와 동일

  console.log(c);
  c += 1;
} while(c < 5);

//! 1에서 20까지의 숫자 중에서 3의 배수만 출력하는 코드
// (for반복문, if조건문 활용)

console.log('== 반복문 / 조건문 활용 예제 ==');

for(let i = 1; i <= 20; i++ ){
  // i가 1부터 20까지 반복

  // 3의 배수만 출력되도록 설정
  if(i % 3 === 0){
    console.log(i);
  }
}