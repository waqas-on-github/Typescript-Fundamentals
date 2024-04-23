// todo thing 
type person = {
    name: string , 
    age: number,
    location : string
    22 : number
}

const me : person = {
    name : 'waqas' , 
    age : 27 , 
    location :  "not found",
    22:22

}


type requiredType = keyof person & string // here & means kindof restricting to string in like extends in interfaces  
// will return union of types 'name' | 'age' | 'location'

const name2 : requiredType = "age"
 