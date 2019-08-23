var counter = {
  count: 0,
  inc: function() {
    this.count++;
  }
};

var obj = {
  count: 100
};

var func = counter.inc.bind(obj);
func();
console.log(obj.count);
