let person = {
    name: "John",
    age: 20
};
function sayHello() {
  alert('Hello All! Welcome to JavaScript!!');
}
sayHello();
console.info(person.foo?.bar); // undefined
console.info(person?.name); // John

console.info(person.foo.bar); // TypeError: Cannot read property 'bar' of undefined
