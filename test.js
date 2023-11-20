// qoute --> ``

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}
multiply(5,5);

// Dealing with Prototypes
const personPrototype = {
    greet() {
        console.log(`Hello ${this.name}`);
    },
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);

const abdul = new Person("Abdul");
abdul.greet()