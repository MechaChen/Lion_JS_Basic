var Vehicle = function() {
  this.price = 100;
};

var v = Vehicle();
try {
  console.log(v.price);
} catch (ex) {
  console.log(ex.message);
}
