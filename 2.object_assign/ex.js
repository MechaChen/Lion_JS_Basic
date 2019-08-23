// Object
var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2.a); // 1

o2.a = 2;
console.log(o1.a); // 2

// Array
var a1 = [];
var a2 = a1;

a1[0] = 1;
console.log(a2[0]); // 1

a2[0] = 2;
console.log(a1[0]); // 2
