// 문제: 다음 요구사항을 충족하는 간단한 애플리케이션을 설계하고 작성하세요.

// 1, 사용자(User) 클래스를 작성하세요. 이 클래스는 다음과 같은 속성과 메서드를 가져야 합니다:

// 속성: 이름(name), 나이(age), 이메일(email)
// 메서드: 사용자 정보를 출력하는 printInfo() 메서드

// 2, 상품(Product) 클래스를 작성하세요. 이 클래스는 다음과 같은 속성과 메서드를 가져야 합니다:

// 속성: 상품명(name), 가격(price)
// 메서드: 상품 정보를 출력하는 printProduct() 메서드

// 3. 주문(Order) 클래스를 작성하세요. 이 클래스는 다음과 같은 속성과 메서드를 가져야 합니다:

// 속성: 주문자(user), 주문한 상품(product), 주문 수량(quantity)
// 메서드: 총 주문 금액을 계산하고 출력하는 printOrderSummary() 메서드

// 4. 사용자가 User 인스턴스를 생성하고, 상품을 선택하여 Order를 생성한 후, 주문 요약 정보를 출력하세요.
console.log('=== 사용자 ===');
class User {
  constructor ({name, age, email}) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  
  printInfo() {
    return `이름 : ${this.name}, 나이:${this.age}세, 이메일: ${this.email}`;
  }
}

const user = new User({name:'황상기' , age: 33, email: 'tkdrl9900@gmail.com'})

console.log(user.printInfo());


console.log('=== 상품 ===');
class Product {
  constructor({name, price}){
    this.name = name;
    this.price=price;
  }
  
  printProduct() {
    return `상품명: ${this.name}, 가격: ${this.price}원`;
  }
}

const product = new Product({name: '콜라', price: 2000});
console.log(product.printProduct());


console.log('=== 상품계산 ===');
class Order {
  constructor({user, price, quantity}){
    this.user = user;
    this.product = product;
    this.quantity = quantity;
  }

  printOrderSummary() {
    return `지불할 금액 : ${product.price * this.quantity}원`
  }
}

const order = new Order({user:'황상기', product:'콜라',  quantity: 3});
console.log(order.printOrderSummary());