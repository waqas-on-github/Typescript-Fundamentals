// a type assertion is a way to tell the compiler that you know more about the type of a value than it 
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
