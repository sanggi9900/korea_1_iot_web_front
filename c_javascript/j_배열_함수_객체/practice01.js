// practice01.js


// 1. 주제선정
// 점심목록

// 1) 추가 점심 추가 하기
// 2) 조회 현재 점심 목록 보기
// 3) 수정 특정 점심 수정하기
// 4) 삭제 특정 점심 삭제하기

// +) 먹은 점심메뉴 계산하기
// +) 전체 점심메뉴 제거하기

//? 점심 객체 예시
let BabBab = {
 id: 1,
 price: 8.5,
Name: 'hansic',
quantity: 4
}

 let SouthCountryHand = {
  id: 2,
  price: 6.8,
  Name: 'mandu',
  quantity: 5
 }

let Hangeun = {
  id: 3,
  price: 7.5,
  Name: 'garbi',
  quantity: 2
}

let DayUdon = {
  id: 4,
  price: 8.0,
  Name: 'Udon',
  quantity: 1
}

let GrandMoMhand = {
  id: 5,
  price: 7.0,
  Name: 'gimbab',
  quantity: 2
}

let hungry = [];

function addToEat(id, price, Name, quantity) {
  const index = hungry.findIndex(item => item.id === id);

  if(index > -1) {
   hungry[index].quantity += quantity;
  } else {
    hungry.push({id, price ,Name, quantity});
  }

  displayHungry();
}

function displayHungry() {
  console.log('=== Lunch MENU');
  hungry.forEach(item => {
    console.log(`메뉴이름: ${item.Name} - 가격: $${item.price}, 식사량: ${item.quantity}`);
    console.log(`계산
      `);
  })
}