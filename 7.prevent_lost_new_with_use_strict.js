// function Fubar(foo, bar) {
//   //   "use strict";
//   this.foo = foo;
//   this.bar = bar;
// }

// Fubar("foo", "bar");
// console.log(foo, bar);

function Fubar(foo, bar) {
  "use strict";
  this.foo = foo;
  this.bar = bar;
}

console.log(new Fubar("foo", "bar").foo);
console.log(new Fubar("foo1", "bar1").bar);
