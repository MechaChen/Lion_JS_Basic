var object = {};

var f = function() {
  return this;
};

// console.log(f() === window); // in Browser
console.log(f() === global); // in Node.js
console.log(f.call(object) == object);

var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

console.log(this);

a(); // 123 in Browser
a.call(null); // 123 in Browser; undefined in Node.js
a.call(undefined); // 123 in Browser; undefined in Node.js
a.call(global); // 123 in Browser; undefined in Node.js
a.call(obj); // 456
