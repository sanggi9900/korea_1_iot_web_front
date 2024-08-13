// ### 학습 목표:

// - 작성된 애플리케이션의 오류를 식별하고 수정할 수 있다.

// > 다음 코드는 일부 오류가 포함된 애플리케이션 코드입니다. 코드에는 변수 명명 규칙, 조건문, 반복문과 관련된 문제가 있습니다. 코드를 분석하고, 오류를 찾아 수정하세요

class ShoppingCart {
constructor() {
this.Items = [];
}

addItem(item) {
this.Items.push(item);
}

calculateTotal() {
let total = 0;
for (let i = 0; i <= this.Items.length; i++) {
total += this.Items[i];
}
return total;
}

printReceipt() {
if (this.Items.length = 0) {
console.log("Your cart is empty.");
} else {
console.log("Receipt:");
this.Items.forEach(function(item) {
console.log(`${item.name}: $${item.price}`);
});
console.log(`Total: $${this.calculateTotal()}`);
}
}
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1.5 });
cart.addItem({ name: "Banana", price: 2.0 });
cart.printReceipt();