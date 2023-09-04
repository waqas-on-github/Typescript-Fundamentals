function add (x :number , y :number)  :number {
    return  x+y
}

add(2,2)


// higher order functions 
const arr = [1, 2, 3] 

arr.map((num) :number |string |boolean  => {
    return num +1 
})

// if function wannna return nothing 


function handleerror (err :string) : never | void  {
    throw new Error(err)
}

handleerror("error")



function addTwo(num: number): number{
    return num + 2
   //return "hello"
}


function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}




signUpUser("hitesh", "hitesh@lco.dev", false)
loginUser("h", "h@h.com")



export {}

export {}