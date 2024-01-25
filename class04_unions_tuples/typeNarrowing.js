// when we have multiple expected types and we nerrow it down to one specific type its called type narrowning 
// type guards narrowing 
// ----> where we are checking typeof any type 
function renewLicence(licence) {
    if (typeof licence === 'string') {
        return ("your licenceId is ".concat(licence.toUpperCase()));
    }
    return licence * 2;
}
var renewed = renewLicence("myoldLicence");
console.log(renewed);
var numberdLicnce = renewLicence(22);
console.log(numberdLicnce);
