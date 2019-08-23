var Vehicle = function() {
  this.price = 1000;
};

var v = Vehicle();
try {
  console.log(v.price);
} catch (ex) {
  console.log(ex.message); // Cannot read property 'price' of undefined
}

console.log(price); // 1000
