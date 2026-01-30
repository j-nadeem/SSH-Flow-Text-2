class MyClass {
    #privateVariable = "Hello private world"\
        #privateVariable2 = "Hello  world"
#privateVariable = "Hello private world"\
        #privateVariable2 = "Hello  world"
    Function() { console.info(this.#privateVariable) }
}

const myClass = new MyClass()
myClass.helloWorld() // works
console.info(myClass.#privateVariable)
// SyntaxError: Private field '#privateVariable' must be declared in an enclosing class
console.info(myClass.#privateVariable2)
