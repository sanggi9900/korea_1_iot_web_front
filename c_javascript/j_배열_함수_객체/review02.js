// review02.js

//! 장바구니 상품 객체
// : 사용자가 선택한 상품들을 관리

//# 1. 장바구니 시스템 기능 정리
// 1) 추가: 장바구니에 상품을 추가
// >>  이미 존재하는 상품이면 수량을 업데이트

// 2) 조회: 현재 장바구니의 상품 목록을 조회

// 3) 수정: 특정 상품의 수량을 변경

// 4) 삭제: 장바구니에서 특정 상품을 제거

// === 추가 기능 ===

// +) 장바구니 상품의 총 가격을 계산

// +) 전체 장바구니 상품 제거


//# 2. 장바구니 객체 정의

// 1) id - 상품의 고유 식별자 (number)
// : 상품을 구분한느 용도

// 2) name - 상품으 이름 (string)
// : 상품을 사용자에게 표시하기 위한 용도

// 3) price - 상품의 가격(number)
// : 상품의 단위 가격 ($, 달러)

// 4) quantity - 사용자가 선택한 해당 상품의 수령 (number)

//? 상품 객체 예시
let product = {
  id: 1,
  name: 'banana',
  price: 1.5,
  quantity: 2
}

//# 3. 장바구니 시스템 구현

// 상품을 저장할 배열 초기화(장바구니)
let cart = [];

//? 1. 장바구니에 상품을 추가
function addToCart(id, name, price, quantity){
  // 장바구니 내에 해당 상품이 있는지 검색(findIndex: 배열 내에 동일한 요소가 있는지 찾고 index를 반환/ 없으면 -1 반환)
  const index = cart.findIndex(item => item.id === id);

  // 상품이 이미 장바구니에 있을 경우
  if (index > -1) {
    cart[index].quantity += quantity; // 해당 상품의 수량을 업데이트
  } else { // 상품이 장바구니에 없을 경우
    cart.push({id, name, price, quantity}); // 새 상품을 장바구니에 추가
  }
  displayCart(); 
}

//? 2. 장바구니 내의 모든 상품을 조회
function displayCart() {
  console.log('=== Cart Contents ===');
  cart.forEach(item => {
    console.log(`${item.name} - price: $${item.price}, Quantity: ${item.quantity}`);
    console.log(`Total ${item.name}'s Price: ${item.price * item.quantity}`);
  });
}

//? 3. 특정상품의 수량을 변경하는 함수
function updateQuantity(id, quantity) {
  const index = cart.findIndex(item => item.id === id);

  // 상품이 존재하고 수량이 0보다 큰 경우 : 상품 업데이트
  if(index > -1 && quantity > 0) {
    cart[index].quantity += quantity; // (a += b) === (a = a + b)
  } else {
    console.log('Invalid Quantity OR item not found');
  }

  displayCart();  // 장바구니 내용 출력
}
//? 4. 장바구니에서 상품을 삭제하는 함수
function removeFromCart(id) {
  // id가 일치하지 않는 상품만 남겨 장바구니를 업데이트
  cart = cart.filter(item => item.id !== id);
  displayCart(); // 장바구니 내용 출력
}

//? 5. 장바구니의 총합을 계산하는 함수
// : reduce() 메서드
// 배열.reduce((acc, value, index, array) => { } , initialValue)
function calculateTotal() {
  let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  console.log(`Cart Total Price: $${total}`);
}

//? 6. 장바구니 전체 상품을 삭제하는 함수
function clearCart() {
  cart = [];
  console.log('Cart is empty!');
  displayCart();
}

//# 4. 장바구니 시스템 사용

addToCart(1, 'banana', 1.5, 3);  // banana - price: $1.5, Quantity: 3    // 생성하기
                                 // Total banana's Price: 4.5
addToCart(2, 'orange', 0.99, 1); // orange - price: $0.99, Quantity: 1
                                 // Total orange's Price: 0.99
addToCart(1, 'banana', 1.5, 1);  // banana - price: $1.5, Quantity: 4
                                 // Total banana's Price: 6
addToCart(2, 'orange', 0.99, 2); // orange - price: $0.99, Quantity: 3
                                 // Total orange's Price: 2.9699999999999998

updateQuantity(1, 5); // banana - price: $1.5, Quantity: 9     // 추가하기
                      // Total banana's Price: 13.5
                      // orange - price: $0.99, Quantity: 3
                      // Total orange's Price: 2.9699999999999998

removeFromCart(1);    // 1에 해당하는 상품삭제한뒤 남은것 출력    // 삭제하기
                      // orange - price: $0.99, Quantity: 3
                      // Total orange's Price: 2.9699999999999998
removeFromCart(2);    // 2에 해당하는 상품 삭제한뒤 남은것 출력 (없다)

addToCart(1, 'mango', 2.5, 2);  // mango - price: $2.5, Quantity: 2  // 생성하기
                                // Total mango's Price: 5
addToCart(2, 'cherry', 1.8, 3); // cherry - price: $1.8, Quantity: 3
                                // Total cherry's Price: 5.4
addToCart(3, 'graph', 3.5, 1);  // graph - price: $3.5, Quantity: 1
                                // Total graph's Price: 3.5

calculateTotal(); // Cart Total Price: $13.9
clearCart(); // Cart is empty!
