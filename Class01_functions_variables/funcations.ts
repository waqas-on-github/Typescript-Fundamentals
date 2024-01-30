//defining types of all variables 
let turn :number ,  winner :boolean ,  tie : boolean ;
let board : number[] 


function init() {
 board  = [0,0,0,0,0,0,0,0 ,0],
 turn =1
 winner =false ,
 tie = false ,
 console.log(turn);
 
}

init()



// funcation with parameter type anotations 

function addNumber (numA: number , numB : number) {
    return numA+numB
}  // return type will be automnatically number cuz all params are number

addNumber(2,4)

//if we dont provide any type it'll be any type and ts dont recommend to use(so always try to  avoid "any") 


// funcation with optional params
function sayHi (name? : string) {
    return(`hi ${name ||"stranger"}`);    
}


console.log(sayHi())  // we can call funcation without arguments 
console.log (sayHi("imran"))


// funcation with default parameters 
function sayHello (name : string ="waqas") {
    return (`hi mr ${name}`)
}

console.log(sayHello());
console.log(sayHello("usman"));



// funcations with return types 
function dividedByTwo (num : number) : string {
    return(`ans is ${num/2}`)
}

const answer : string = dividedByTwo(22)
console.log(answer);



// bit easy way with type infrence we can skip bit stuff Ts will automagially infer types 
function dividedByThree (num : number):string{
    return(`ans is ${num/2}`)
}

const answerThree = dividedByTwo(22)
console.log(answerThree);


// if we arn't returing any thing we can return void 

function sayHappy (name : string) : void  {
    console.log(` happy new year mr ${name || "starnger"}`);
    
} 

sayHappy("waqas")



// return  type wit h arrow funcatins 

const addFour = (num:number) : number => {
    return (num+4)
}

const fourRes  :number =  addFour(22);
console.log(fourRes);



