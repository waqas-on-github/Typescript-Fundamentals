interface User {
    id : number, 
    name : string ,  
    address : {
        street  : string
        city  : string , 
        countary : string
    }
}


type mytyep =  User ['id']|User['name']


export  {
    User
}