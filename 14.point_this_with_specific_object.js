var o = {
  f1: function() {
    console.log(this); // o object
    var self = this;
    var f2 = (function() {
      console.log(self); // o object
    })();
  }
};

o.f1();
