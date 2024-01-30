// all non premtive types will be treate object ins ts 
//-------Object vs object
// Object-->globle constroctor  vs object --> type 
//----------general type annotation----------- (rare used )
// very very rare pettern not much used 
var firstMeal;
firstMeal = {
    entree: "waffles",
    dessert: "too much syrup"
};
// drawbacks of this pattern 
// ---> not strict type checking line we can insert any data type in object 
// #1 cant access variable inside object
//   --->firstMeal.entree
// firstMeal.entree =" more waffels"
// #2 can assign  any non primitive type data  in object 
// firstMeal=["one" , "twos"]
//  firstMeal = () => {
//     return (["hola" , "x"])
//  }
// but this is possible but we can control in ts config 
// we can reassing vale of object keys/variables 
firstMeal['entree'] = "more waffels";
// we can add new key pairs aslo
firstMeal['joe'] = "more waffels";
console.log(firstMeal);
//---------------MORE SPECIFIC TYPE ANNOTATION------------------------- 
var secondMeal;
secondMeal = { entree: "hot pocket", dessert: "chease cake", eated: false };
// we can also assign and add new key value in boject which is drawback of this pattern aslo 
secondMeal["commins"] = "fast runner";
secondMeal["eated"] = true;
// secondMeal=[1,2,3]  -->Ts will complain about this which was allowed in general type declaration above  
console.log(secondMeal);
// we can do  type annotation , variable declaration  and value assinging on the way at once also 
var thridMeal = {
    meal1: "choco",
    meal2: "bisconi"
};
// thridMeal['meal1'] ="cool"  // this will complain if we use readonly 
thridMeal['meal2'] = "cocomo"; // this wo'nt complain 
console.log(thridMeal);
// we can make whole object read only alos
var forthMeal = {
    meal3: " more choco",
    meal4: "more bisconi"
};
// using objects in funcation 
function printMeal(myMeal) {
    return ("".concat(myMeal.meal1, " and ").concat(myMeal.meal2));
}
var meals = printMeal({ meal1: "choco", meal2: "banana" });
console.log(meals);
// type destrcturig 
function printAnotherMeal(_a) {
    var meal1 = _a.meal1, meal2 = _a.meal2, meal3 = _a.meal3;
    console.log({ allMeals: "".concat(meal1, " and ").concat(meal2, " and ").concat(meal3) });
}
printAnotherMeal({ meal1: "coa", meal2: "shippo" });
