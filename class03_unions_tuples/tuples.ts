
// tuples are strctured types in array

let myTuple : [string , string , number , boolean]

myTuple = ['str' , "str", 22,true]


// but tuples can be cheated by popin an pushing items like 

myTuple.push(22)
myTuple.pop()
myTuple.pop()
myTuple.pop()
myTuple.pop()

myTuple.length

// how to fix 
let anotherTuple : readonly [number , string] = [22 ,"hello"]

anotherTuple.push(99)  // it is not gonna work cuz of read only 