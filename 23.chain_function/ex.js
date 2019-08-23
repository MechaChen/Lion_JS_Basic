var obj = {
  namename: "Jive",
  times: [1, 2, 3],
  print: function() {
    this.times.forEach(
      function(n) {
        console.log(this.namename);
      }.bind(this)
    );
    return this;
  },
  count: function() {
    console.log("this is count.");
    return this;
  },
  append: function() {
    console.log("this is append.");
    return this;
  }
};

obj
  .print()
  .count()
  .append();
