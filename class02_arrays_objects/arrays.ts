
// annotate tyep of items you are gonna store in array 
const arrayofNums : number[] =[1,2 , 3, 4 , 8.9]
arrayofNums.push("hola")   // we can not push irrelivent type of data 
const arrayOfstrs   : string[] =['str1' , "str2"] 
const arrayOfBools  : boolean[] =[true, false]
 
// never do this this array will become user less you can not push any thing in this array 

const emptyArray = []

emptyArray.push("wow") // this will not be possable 


/// the another way 

const arrayOfMoreNums : Array<number> = [1,2,3,5]
arrayOfMoreNums.push(44) 


// ittrating on arrays 


for (let i: number = 0; i < arrayOfMoreNums.length; i++) {
    console.log(arrayOfMoreNums[i]);
}



arrayofNums.forEach((num : number) : void => {
  console.log(num);
  
})


const doubledNums : number[] = arrayOfMoreNums.map((oneNum : number): number => {
    return oneNum*2
} )

console.log(doubledNums);
