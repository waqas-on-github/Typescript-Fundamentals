// take existing type and generate union of those types 

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


type requiredType = keyof person & string // will return union of types 'name' | 'age' | 'location'

const name2 : requiredType = "age"
 


// funcation that get values of  obj
function getvalues(obj: person, key : keyof person) {

    const value = obj[key]

    console.log(value);
    
    
}


getvalues(me , 'name')


// 

function getlog <T> (obj : T) : string {
   
    return obj as string
}

