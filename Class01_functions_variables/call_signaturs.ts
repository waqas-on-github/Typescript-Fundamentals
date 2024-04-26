interface myFunc {
    (x: number , y : number) : number
}



const adtwo : myFunc = (x, y) => {
    return x+y
}
console.log(

    adtwo(22,3)
);

// we can achive same by type alisis 
type myFunc2 = {
    (x:number , y: number) : void
}


const multplier : myFunc2 = (x, y) => {
    console.log(x*y);
    
}
 
multplier(33, 56)