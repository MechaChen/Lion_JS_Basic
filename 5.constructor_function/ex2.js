var Vehicle = function() {
  this.price = 100;
};

var vehicle = new Vehicle();
console.log(vehicle.price);

try {
  var v = Vehicle();
  console.log(v.price);
} catch (ex) {
  console.log(ex.message);
}
