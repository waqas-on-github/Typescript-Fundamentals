
// whats generic 
// ---> Types which take parameters


// here im trying to get value form input element  which i selected by class name 

// but typescript is assuming most generic type selected by classname  like ---> const input: Element | null just element 
// ---> so raw html element dont have value property so we need to provide actual type we wanna select 

const input = document.querySelector<HTMLInputElement>(".input")

const value = input?.value

// lets create our own generic type

// #1 example func that take array and return its second element 


     // function getSecond(arr:(number|string)[]) {
     //     return arr[1]
     // }
     
     // let secondEle = getSecond([1,2,3])

// -------- we can do this  but then funcation can only accept number or string type of array 


      function getSecond<arrayType>(arr:arrayType[]) : arrayType {
          return arr[1]
      }
     
       let secondEle = getSecond([1,2,3])
       let secondEleofStrs = getSecond(['str1' , 'str2' ])
 
// let figure out how its works 

// step #1 when we define funcation the <arrayType> will be anyor empty box which is waiting for types to get 
// setp #2 when we call funcation "getSecond([1,2,3])" --->  TS will infer type of data what we are providing 
// step#3 it'll set that type of "arrayType"  'getSecond<arrayType>' --> here and this will act as placeholder/variable to store type 
//---> and the pass it into actual parameter "arr:arrayType[]" 
 

// generics with type alises/custom Types

type person<Pdata extends Array<number | string>  > ={
    name: string;
    personData: Pdata[];
}

const person1: person<number[] > = {
    name: "waqas",
    personData: [1, 23, 4]
}