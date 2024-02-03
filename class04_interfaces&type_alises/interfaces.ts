
// interface is juts structer of types which you are gonna use in no primitives data types 
interface dog {
    readonly name : string; 
    faveToy? : string;
    age :number;
    bark : () => string
}


const mydog :dog = {
    name : "puppyx" , 
    age  :2,
    bark : () : string => {
        return("bark");
        
    }

}


function printBark  (dog : dog) : void {
    console.log(dog.bark());
    
}



printBark(mydog)


// also we can extend interface to other interfaces 


interface bigDog extends dog {
    canBite :  boolean
}  


// we can also reopen(add more type) existing interfce 

interface bigDog  {
    isSleeping : boolean
}



const myBiggerDog :bigDog =  {

    name : "joe biden" , 
    age : 90 , 
    bark() {
        return 'yes a lot'
    },
    canBite : true , 
    isSleeping :false ,
    faveToy : 'atomic bomb'

}


// we can create  interface for funcations also 

// just for one funcation 
interface greater {
    //params        --> return type 
    (name: string) : string
}


function greetSomeone(fn: greater, param: string): string {
    if (param && typeof param === 'string') {
        return fn(param);
    } else {
        throw new Error('Invalid parameter type');
    }
}

// Define the callback function that conforms to the greater interface
const myCallback: greater = (name: string): string => {
    return "Hello, " + name;
};

// Call the greetSomeone function with the callback function and a parameter
const result: string = greetSomeone(myCallback, "John");

console.log(result); // Output: "Hello, John"



// for arrays 
interface numberArray extends Array<number> {}

const myarr: numberArray = [1, 2, 3, 4, 455];

type mytype = keyof typeof myarr;

const anotherArr: mytype = 55; // Valid
// const anotherArr: mytype = "length"; // Invalid, as it's not a number index


