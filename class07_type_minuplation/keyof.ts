// take existing type and generate union of those types 

type person = {
    name: string , 
    age: number,
    location : string
}


const me : person = {
    name : 'waqas' , 
    age : 27 , 
    location :  "not found"
}

// funcation that get values of me obj

type requiredType = keyof person  // will return union of types 'name' | 'age' | 'location'

function getvalues(obj: person, key : keyof person) {

    const value = obj[key]

    console.log(value);
    

}


getvalues(me , 'name')


// 

function getlog <T> (obj : T) : string {
   
    return ""
}