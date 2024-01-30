

// when we have multiple expected types and we nerrow it down to one specific type its called type narrowning 
// type guards narrowing 
// ----> where we are checking typeof any type 
function renewLicence (licence : string | number) :string|number {
  
    
    if(typeof licence ==='string') {
        return (`your licenceId is ${licence.toUpperCase()}`)
    }

    return licence*2
}



const renewed  = renewLicence("myoldLicence")
console.log(renewed);

const numberdLicnce =renewLicence(22)

console.log(numberdLicnce);




