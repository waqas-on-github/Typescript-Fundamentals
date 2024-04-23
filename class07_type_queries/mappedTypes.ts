// create types by looping over other types/interfaces

//  in  --> is operator use for looping 
type values ="username" | "email"

// syntex of mapped types is [ key in values  ]
type user = { [key in  values] : string}

const user1 : user = { 
    username : "waqas", 
    email : "soemMail@gmail.com" 
}



interface point {
    x : number, 
    y : number , 
    z : number
}


const  center : Readonly<point>= {
    x : 0, 
    y : 0, 
    z : 0
}
        

// lets create our own readonly for center2 

type myReadOnly<T> ={
    [item in keyof T ] : T[item]
}


const center2 : point= {
    x : 0, 
    y : 0, 
    z : 0
}



//
const obj = {
    name2 : "waqas", 
    age : 27, 
    contact : 23971231719
}

type objType = keyof typeof obj

// create again object strcture through mapped types 

type anotherType = {
    [key in objType] :objType
}