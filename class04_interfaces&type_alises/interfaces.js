var mydog = {
    name: "puppyx",
    age: 2,
    bark: function () {
        return ("bark");
    }
};
function printBark(dog) {
    console.log(dog.bark());
}
printBark(mydog);
var myBiggerDog = {
    name: "joe biden",
    age: 90,
    bark: function () {
        return 'yes a lot';
    },
    canBite: true,
    isSleeping: false,
    faveToy: 'atomic bomb'
};
function greetSomeone(fn, param) {
    if (param && typeof param === 'string') {
        return fn(param);
    }
    else {
        throw new Error('Invalid parameter type');
    }
}
// Define the callback function that conforms to the greater interface
var myCallback = function (name) {
    return "Hello, " + name;
};
// Call the greetSomeone function with the callback function and a parameter
var result = greetSomeone(myCallback, "John");
console.log(result); // Output: "Hello, John"
var myarr = [1, 2, 3, 4, 455];
var anotherArr = 55; // Valid
// const anotherArr: mytype = "length"; // Invalid, as it's not a number index
