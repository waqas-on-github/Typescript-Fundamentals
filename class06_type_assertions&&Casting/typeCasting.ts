// ther is  no way to do type casting in ts but we can use js type coersion to do 
//There may be occasions, especially when exploring TypeScript where we want to force
// the compiler to regard a value as being of a particular type. This is called type casting.

let frontEndMastersFounding = new Date("Jan 1, 2012")
let date1 = frontEndMastersFounding
     

let date2 = frontEndMastersFounding as any; // force the type to be `any`
     
let number = 22 as const

// a type assertion is a way to tell the compiler that you know more about the type of a value than it 
let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;







