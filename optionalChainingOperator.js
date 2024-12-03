let person = {
    name: "John",
    age: 20
};
function showTotal() {
  var num1 = 10;
  var num2 = 20;
  var total = num1 + num2;
  alert('Total is : ' + total);
}
console.info(person.foo?.bar); // undefined
console.info(person?.name); // John

console.info(person.foo.bar); // TypeError: Cannot read property 'bar' of undefined
