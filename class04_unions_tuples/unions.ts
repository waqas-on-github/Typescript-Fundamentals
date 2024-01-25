
// unions in variables 
let myvar: string | number ;

myvar = "hello my var "

let maybeString: string | null | undefined = "Hello";

myvar =333


// unions in functions 

function addme (value : number | bigint ) {
    console.log(value);
    
}

addme(22)

// unions with type aliases

type  allint  = number | bigint 


// unions in arrays 

const mix2 : (number |string)[] = [1,3,4,'qe' ,'c'] 



// we can make just vale as type 

let  pass : 123 = 123

// pass =999  // not allowed 

// we can also do  unions   like this 

let user : "user" |"modirator" | "Admin" = 'user'

// user = "some one else "  // not allowed 





