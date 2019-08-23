function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }
  return { name, setAge, getAge };
}

var p1 = new Person("張三");
console.log(name);
p1.setAge(25);
console.log(p1.getAge());
