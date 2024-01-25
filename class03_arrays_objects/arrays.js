// annotate tyep of items you are gonna store in array 
var arrayofNums = [1, 2, 3, 4, 8.9];
arrayofNums.push("hola"); // we can not push irrelivent type of data 
var arrayOfstrs = ['str1', "str2"];
var arrayOfBools = [true, false];
// never do this this array will become user less you can not push any thing in this array 
var emptyArray = [];
emptyArray.push("wow"); // this will not be possable 
/// the another way 
var arrayOfMoreNums = [1, 2, 3, 5];
arrayOfMoreNums.push(44);
arrayofNums.forEach(function (num) {
    console.log(num);
});
var doubledNums = arrayOfMoreNums.map(function (onenum) {
    return onenum * 2;
});
console.log(doubledNums);
