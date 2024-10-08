// z_practice.js

//! 반복문 연습  예제

//? 배열의 모든 요소를 출력
// 배열명: fruits
// 배열 요소의 개수 : 3개
// 배열의 길이: 3개 (배열명.length)
// 배열의 마지막 요소의 인덱스 번호: 2

// 배열 요소에 접근: 배열명[요소 인덱스 번호]
// 배열 전체를 순회: 초기화 = 0; 조건식 < 배열명.length; 증감
let fruits = ['apple', 'banana', 'orange'];

console.log('=== for 문 ===');

// 반복문 실행 시 조건시에 대한 배열의 길이 측정이 단 한번만으로 가능
// >> 배열의 길이는 루프 바깥에서 한 번만 계산하는 것이 효율적
let fruitsLength = fruits.length

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}

console.log('=== while 문 ===');
let a = 0;
while(a < fruits.length){
  console.log(fruits[a]);
  a++;
}

console.log('=== do-while 문 ===');
let b = 0;
do{
  console.log(fruits[b]);
  b++;
} while(b < fruits.length);