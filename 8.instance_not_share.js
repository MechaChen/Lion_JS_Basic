function Cat(name, color) {
  this.name = name;
  this.color = color;
  this.meow = function() {
    console.log("meow, meow, meow...");
  };
}

var cat1 = new Cat("大毛", "白色");
var cat2 = new Cat("二毛", "黑色");
var cat3 = new Cat("大毛", "白色");

console.log("cat1.meow == cat2.meow : ", cat1.meow == cat2.meow);
console.log("cat1.name === cat3.name : ", cat1.name === cat3.name);
console.log("cat1.color === cat3.color : ", cat1.color === cat3.color);
