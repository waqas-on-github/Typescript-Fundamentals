

class animal {
    name : string ;  // property with its type 
    age : number =10 // now age property can not be assessed outside of this class

    constructor(name: string , age : number) {
         this.name = name 
         this.age = age
    }

    move(distance : number) : string {
         return(`${this.name} moved ${distance}`);   
    };

   protected eate =  (grassname : string) : string  =>  {   // this method can not be accessed outside of class but in other 
                                                            // --> ^classes extend this class
          return (`cow has age ${this.age} eated ${grassname}`)
    }
}


let cow = new animal("myCow" , 22)
cow.move(20)
console.log(cow.move(20))


// we can go further and we can extend classe to other classes

class dog extends animal {
     color : string 
     
     constructor(name: string ,age: number ) {
          super(name , age )
     }

     walk = (distance : number) => {
          const data = super.move(distance)
          return data
     }
}


const mydog = new dog("puppy" ,10)
console.log(mydog.walk(22));


//