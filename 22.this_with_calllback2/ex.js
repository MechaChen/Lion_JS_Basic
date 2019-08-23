// var obj = {
//   name: "Jive",
//   times: [1, 2, 3],
//   print: function() {
//     this.times.forEach(function(n) {
//       console.log(this.name);
//       //   console.log(this === window); // true in Browser
//       console.log(this === global); // true in Node.js
//     });
//   }
// };

var obj = {
  name: "Jive",
  times: [1, 2, 3],
  print: function() {
    this.times.forEach(
      function(n) {
        console.log(this.name);
        //   console.log(this === window); // false in Browser
        console.log(this === global); // false in Node.js
      }.bind(this)
    );
  }
};

obj.print();
