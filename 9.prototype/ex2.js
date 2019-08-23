function Animal(name) {
  this.name = name;
}

Animal.prototype.color = "白色";

var cat1 = new Animal("大毛");
var cat2 = new Animal("二毛");

console.log(cat1.color);
console.log(cat2.color);

cat1.color = "yellow";
Animal.prototype.color = "black";

console.log(cat1.color);
console.log(cat2.color);
