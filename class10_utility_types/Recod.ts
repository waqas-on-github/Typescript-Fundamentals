type person  = {
    name :  string , 
    age : number
}

type peoplesGroupedByName = {
    [index : string] : person[]
} 
