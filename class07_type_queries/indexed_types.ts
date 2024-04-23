type Person = { age: number; name: string; alive: boolean };

type Age = Person["age"]; //  set type of Age to what type "age" have in person type 
//---> type Age = number 
//  Person["age"] --> indexed type 


type I1 = Person["age" | "name"];

type t2 = Person[keyof Person] // it means  person["age" | "name"|"alive"] --> person["age"] = number ...so on 
//--->type t2 = string | number | boolean





// job of this funcation to type safe and useful for any strcture of object 
// generics are techinacally interfacees but automated 


function getProperty <O , K extends keyof O> (obj: O , key :K) {
    console.log(typeof obj);
    
    console.log(obj[key]);

}

// steps getporperty (<O>) --> will be inferd as interface {name : string , age :number} 
// k --> key of above interface like 'name' | 'age' 


let user  = {name : 'john doe' , age : 26}

getProperty(user , 'name')





function getPropertyOfArray <A , I extends keyof A> ( arr: A , indx : I ) {
    console.log( arr[indx]);
    
}


getPropertyOfArray(['str' , true] , 1)


const myarr = [1, 2, 3, 'str'];

type ElementType = typeof myarr[number]; // Get the type of elements in myarr

const mynextarr: ElementType[] = [1, 'str']; // Define mynextarr as an array of ElementType




