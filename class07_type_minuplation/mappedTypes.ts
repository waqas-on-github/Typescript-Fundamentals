// create types by looping over other types/interfaces

//  in  --> is operator use for looping 
type values ="username" | "email"


type user ={ [key in  values] : string}

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



