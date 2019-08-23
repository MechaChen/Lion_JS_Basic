function Fubar(foo, bar) {
  // "use strict";
  this.foo = foo;
  this.bar = bar;
}

try {
  console.log(Fubar("foo", "bar").bar);
  console.log(Fubar("foo", "bar").foo);
} catch (ex) {
  console.log(ex.message);
}

Fubar("foo", "bar");
console.log(foo, bar); // in window / global object

// function Fubar(foo, bar) {
//   "use strict";
//   this.foo = foo;
//   this.bar = bar;
// }

// console.log(new Fubar("foo", "bar").foo);
// console.log(new Fubar("foo1", "bar1").bar);
