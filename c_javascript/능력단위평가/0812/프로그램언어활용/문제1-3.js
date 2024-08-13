// 1. 문제 설명

// 응시자는 자신이 생각한 주제를 바탕으로 클래스를 설계하고 구현하세요. 이 클래스는 해당 주제와 관련된 속성과 메소드를 포함해야 하며, 객체를 생성하여 클래스의 기능을 테스트할 수 있어야 합니다.

// 2. 요구사항

// 1. **주제 선정**
// - 응시자는 자유롭게 주제를 선정할 수 있습니다. 예를 들어, 도서 관리, 차량 관리, 학생 관리, 쇼핑카트 등 다양한 주제를 선택할 수 있습니다.
// 2. **클래스 설계 및 구현**
// - 주제에 맞는 클래스를 설계합니다.
// - 클래스는 최소 3개 이상의 속성을 포함해야 합니다.
// - 클래스는 최소 2개 이상의 메소드를 포함해야 합니다.
// - 클래스의 속성과 메소드는 주제와 관련된 실제적인 기능을 수행해야 합니다.
// - 생성된 클래스를 이용해 최소 1개의 객체를 생성하고, 해당 객체를 이용해 메소드를 실행하는 코드를 작성합니다.
// 3. **객체 생성 및 메소드 테스트**
// - 설계한 클래스를 사용하여 객체를 생성합니다.
// - 생성된 객체를 통해 클래스의 메소드를 호출하여 동작을 확인합니다.
// - 객체의 상태를 나타내는 속성을 변경하거나 확인하는 코드도 포함합니다.

let exLibrary = {
  books: []
}

let EBook1 ={
  id :1,
  title: '묵향',
  author:'황상기',
  price : 8000,
  quantity : 5,
  sold: true
}


let EBook2 ={
  id :2,
  title: '비뢰도',
  author:'정승환',
  price : 7900,
  quantity : 0,
  sold: false
}
let EBook3 ={
  id :3,
  title: '데이몬',
  author:'권진아',
  price : 6000,
  sold: true
}
let EBook4 ={
  id :4,
  title: '아크',
  author:'이수현',
  price: 8100,
  quantity : 2,
  sold: true
}
let EBook5 ={
  id :5,
  title: '나혼자만 레벨업',
  author:'이지은',
  price: 8900,
  quantity: 1,
  sold: true
}


class Book {
 constructor(id, title, author, price, quantity) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.price = price;
  this.quantity = this.quantity
  this.sold = true;
 };


 sold() {
 if(this.quantity > 0) {
  this.sold = true;
  console.log('구매해주셔서 감사합니다');
 } 
 else if (this. quantity == 0) {
  this.sold = false;
  console.log('완판되었습니다.');
 } else {
  console.log('재고가 없습니다.');
 }
}
};

addBook(title, author) {
  const newBook = new Book(this.books.length + 1, title, author);
  this.books = push(newBook);
  console.log(`${title}책이 서점에 추가되었습니다.(저자: ${author})`);
}


displayBooks() {
  console.log('=== BOOKSTORE === ');
  this.books.forEach(book => {
    console.log(`${book.id}: ${book.title} by ${book.author} 가격 : ${book.price} 수량: ${book.quantity}`);
  })
}

soldBook(id) {
  const book = this.books.find(book => book.id === id);

  if(book) {
    book.sold();
  }
  else {
    console.log('해당책을 찾을 수없습니다');
  }
}


const busanBookStore = new BookStore();

busanBookStore.addBook('신의 탑', '송중기');
busanBookStore.addBook('신의 탑', '송중기');
busanBookStore.addBook('신의 탑', '송중기');
busanBookStore.addBook('탑 건', '송장기');
busanBookStore.addBook('탑 건', '송장기');

busanBookStore.displayBooks();

busanBookStore.sold(5);
busanBookStore.displayBooks();


