var obj = {};

function add(a, b) {
  return a + b;
}

console.log(add.call(this, 1, 2));
console.log(add.call(obj, 1, 2));
