// all non premtive types will be treate object ins ts 
//-------Object vs object
// Object-->globle constroctor  vs object --> type 


//----------general type annotation----------- (rare used )


// very very rare pettern not much used 
let firstMeal : object 


firstMeal = {
    entree :"waffles" , 
    dessert : "too much syrup"
}

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
firstMeal['entree'] ="more waffels"
// we can add new key pairs aslo
firstMeal['joe'] ="more waffels"


console.log(firstMeal);

//---------------MORE SPECIFIC TYPE ANNOTATION------------------------- 

let secondMeal : {entree : string ; dessert : string; joe? : string  , eated : boolean }

secondMeal={entree:"hot pocket" , dessert : "chease cake" , eated :  false}

// we can also assign and add new key value in boject which is drawback of this pattern aslo 
secondMeal["commins"] = "fast runner"
secondMeal["eated"] =true

// secondMeal=[1,2,3]  -->Ts will complain about this which was allowed in general type declaration above  
console.log(secondMeal);



// we can do  type annotation , variable declaration  and value assinging on the way at once also 


const thridMeal :{
     readonly meal1:string ;
     meal2: string
} = {
 meal1 :"choco",  
 meal2 :"bisconi"
}



// thridMeal['meal1'] ="cool"  // this will complain if we use readonly 

thridMeal['meal2'] ="cocomo"    // this wo'nt complain 

console.log(thridMeal);


// we can make whole object read only alos

const forthMeal: Readonly<{
    meal3: string;
    meal4: string;
  }> = {
    meal3: " more choco",
    meal4: "more bisconi"
  };
  

  // using objects in funcation 

function printMeal ( myMeal :Meal) : string {

    return (`${myMeal.meal1} and ${myMeal.meal2}`)
    
}


const meals : string = printMeal({ meal1 :"choco", meal2 : "banana" })

console.log(meals);


//------------------------------TYPE ALIASES ---------------------------------------------


type Meal = {
  meal1 : string , 
  meal2 : string , 
 readonly meal3? : "hono",
}



// type destrcturig 

function printAnotherMeal ({meal1 , meal2 , meal3} : Meal) : void {

  console.log( {allMeals : `${meal1} and ${meal2} and ${meal3}`})

}


printAnotherMeal({meal1 : "coa" , meal2 : "shippo"})

