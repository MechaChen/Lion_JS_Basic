var o = {
  f1: function() {
    console.log(this);
    var f2 = (function() {
      //   console.log(this === window); // for Browser
      console.log(this === global); // for Node.js
    })();
  }
};

o.f1();
