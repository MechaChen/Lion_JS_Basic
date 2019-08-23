var add = function(x, y) {
  return x * this.m + y * this.n;
};

var obj = {
  m: 2,
  n: 3
};

var newAdd = add.bind(obj, 5);
// newAdd = function(y) { return 5*2 + y*3 };
console.log(newAdd(4)); // 22
