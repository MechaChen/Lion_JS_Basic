function Animal(name) {
  this.name = name;
}

Animal.prototype.color = "白色";

var cat1 = new Animal("大毛");
var cat2 = new Animal("二毛");

console.log(cat1.color); // white
console.log(cat2.color); // white

// “原型鏈”的作用是，讀取對象的某個屬性時，
// JavaScript 引擎先尋找對象本身的屬性，如果找不到，
// 就到它的原型去找，如果還是找不到，就到原型的原型去找。
// 如果直到最頂層的 Object.prototype 還是找不到，則返回 undefined。
// 如果對象自身和它的原型，都定義了一个同名屬性，那麼優先讀取對象自身的屬性，
// 這叫做“覆蓋”（overiding）

cat1.color = "black";
Animal.prototype.color = "yellow";

console.log(cat1.color); // balck
console.log(cat2.color); // yellow
