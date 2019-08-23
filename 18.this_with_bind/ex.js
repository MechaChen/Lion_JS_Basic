var counter = {
  count: 0,
  inc() {
    this.count++;
  }
};

console.log(counter.count); // 0
counter.inc();
console.log(counter.count); // 1

var func = counter.inc;
func(); // func is in Window object
console.log(counter.count); // still 1

var func = counter.inc.bind(counter);
func(); // func is binded to counter object now
console.log(counter.count); // 2

counter.inc.call(counter); // call() method can immediately invoke; bind() return a function
console.log(counter.count);
