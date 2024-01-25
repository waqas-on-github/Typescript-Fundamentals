
// interface is juts sstructer of types which you are gonna use in objects 
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