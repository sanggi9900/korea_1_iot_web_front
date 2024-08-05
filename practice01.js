// practice01.js

let number =  [1, 2, 3, 4];
let word = ['단어1', '단어2', '단어3'];
let emptyArray = [];
let boolean = [true];

let fruits=['Apple', 'Banana', 'Cherry'];
console.log(fruits[1]);

fruits[2] = 'Mango';
console.log(fruits);

fruits.reverse();
console.log(fruits);

//! 고급 배열 패턴과 기술
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
// 스프레드 연산자 사용하기: 두 배열을 병합하여 새 배열을 만드는 코드를 작성

let merge = [...array1, ...array2];
console.log(merge);