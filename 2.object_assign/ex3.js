var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2.a);

o2.a = 2;
console.log(o1.a);
