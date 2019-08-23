var counter = {
  count: 0,
  inc: function() {
    "use strict";
    this.count++;
  }
};

function callIt(callback) {
  callback();
}

// callIt(counter.inc); // TypeError: Cannot read property 'count' of undefined
callIt(counter.inc.bind(counter));
console.log(counter.count);
