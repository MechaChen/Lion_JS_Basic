var Obj = function(p) {
  this.p = p;
};

Object.prototype.m = function() {
  return this.p;
};

var o = new Obj("Hello, World!");

console.log(o.p); // Hello, World
console.log(o.m()); // Hello, World
