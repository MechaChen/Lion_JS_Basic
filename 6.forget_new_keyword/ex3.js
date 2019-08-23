var Vehicle = function() {
  this.price = 100;
};

try {
  var v = Vehicle();
  console.log(v.price);
} catch (ex) {
  console.log(ex.message);
}

console.log(price);
